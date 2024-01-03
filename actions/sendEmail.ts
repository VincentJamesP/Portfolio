"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "vincentjperegrino@gmail.com",
      subject: "Someone wants to hire you!",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    if (error) {
      return {
        error: getErrorMessage(error),
      };
    }

    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};

// export async function sendEmail() {
//     try {
//       const { data, error } = await resend.emails.send({
//         from: 'Acme <onboarding@resend.dev>',
//         to: ['test'],
//         subject: "Hello world",
//         react: React.createElement(ContactFormEmail, {
//                     message: "test message",
//                     senderEmail: "test senderEmail",
//                   }),
//       });

//     //   if (error) {
//     //     console.log(getErrorMessage(error));
//     //     return;
//     //   }

//       return;
//     } catch (error) {
//         console.log(getErrorMessage(error));
//         return;
//     }
// }
