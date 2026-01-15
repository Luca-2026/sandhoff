import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  type: "contact" | "project";
  name: string;
  email: string;
  phone?: string;
  message?: string;
  // Project request specific fields
  company?: string;
  roomType?: string;
  roomCount?: string;
  timeline?: string;
  budget?: string;
  platform?: string;
  existingSetup?: string;
  requirements?: string[];
  additionalInfo?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email function");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log("Received form data:", { type: data.type, email: data.email, name: data.name });

    // Validate required fields
    if (!data.email || !data.name) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Name und E-Mail sind erforderlich" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    let subject: string;
    let htmlContent: string;

    if (data.type === "project") {
      // Project request email
      subject = `Neue Projektanfrage von ${data.company || data.name}`;
      
      const requirementsList = data.requirements?.length 
        ? data.requirements.map(r => `<li>${r}</li>`).join("") 
        : "<li>Keine angegeben</li>";

      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            Neue Projektanfrage
          </h1>
          
          <h2 style="color: #333; margin-top: 20px;">Kontaktdaten</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666;">Firma:</td><td style="padding: 8px 0;"><strong>${data.company || "-"}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Ansprechpartner:</td><td style="padding: 8px 0;"><strong>${data.name}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">E-Mail:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Telefon:</td><td style="padding: 8px 0;">${data.phone || "-"}</td></tr>
          </table>

          <h2 style="color: #333; margin-top: 20px;">Projektrahmen</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666;">Raumtyp:</td><td style="padding: 8px 0;"><strong>${data.roomType || "-"}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Anzahl Räume:</td><td style="padding: 8px 0;">${data.roomCount || "-"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Zeitrahmen:</td><td style="padding: 8px 0;">${data.timeline || "-"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Budget:</td><td style="padding: 8px 0;">${data.budget || "-"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">UC-Plattform:</td><td style="padding: 8px 0;">${data.platform || "-"}</td></tr>
          </table>

          <h2 style="color: #333; margin-top: 20px;">Anforderungen</h2>
          <ul style="color: #333;">${requirementsList}</ul>

          ${data.existingSetup ? `
            <h2 style="color: #333; margin-top: 20px;">Bestehende Ausstattung</h2>
            <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.existingSetup}</p>
          ` : ""}

          ${data.additionalInfo ? `
            <h2 style="color: #333; margin-top: 20px;">Weitere Informationen</h2>
            <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.additionalInfo}</p>
          ` : ""}

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #999; font-size: 12px;">Diese Anfrage wurde über das Projektanfrage-Formular auf sandhoff.lovable.app gesendet.</p>
        </div>
      `;
    } else {
      // Simple contact email
      subject = `Neue Kontaktanfrage von ${data.name}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            Neue Kontaktanfrage
          </h1>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; color: #666;">Name:</td><td style="padding: 8px 0;"><strong>${data.name}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">E-Mail:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Telefon:</td><td style="padding: 8px 0;">${data.phone || "-"}</td></tr>
          </table>

          <h2 style="color: #333; margin-top: 20px;">Nachricht</h2>
          <p style="color: #333; background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message || "Keine Nachricht"}</p>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #999; font-size: 12px;">Diese Nachricht wurde über das Kontaktformular auf sandhoff.lovable.app gesendet.</p>
        </div>
      `;
    }

    console.log("Sending email to luca@sandhoff.org");
    
    const emailResponse = await resend.emails.send({
      from: "Sandhoff Website <onboarding@resend.dev>",
      to: ["luca@sandhoff.org"],
      reply_to: data.email,
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse.data }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unbekannter Fehler";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
