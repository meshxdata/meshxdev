import Airtable from "airtable";
import { FormEvent, useState } from "react";


export default function GetStartedForm() {
  const [email, setEmail] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const base = new Airtable({
      apiKey:
        "patWHwBJyYO3lvQOz.7659832b0ad80b29263f0b8f802917f65c04a80320def501cf8a84f1978ad22e",
    });
  
    const table = base.base("appGNJtpLEGfEBNtN" as string).table("waitlist");
  
    await table.create({
            email: formData?.get("email_address") as string,
            sentDate: new Date().toISOString(),
      });
    setEmail("");
    setShowResponse(true)
  }  
  
  return (
      <form onSubmit={submit}
      className="bg-opacity-90 p-6 rounded-md max-w-2xl w-full mx-4 text-center mt-36"
    >
      <h2 className="text-white text-2xl font-normal font-montserrat mb-4">
        Request early access
      </h2>
      <div
        className="flex flex-col sm:flex-row items-center w-full space-y-2 sm:space-y-0"
      >
        <div className="flex w-full">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email_address"
            name="email_address"
            placeholder="email address"
            className="flex-grow placeholder-white/70 font-montserrat bg-[#BB3800] rounded-l-md focus:outline-none focus:ring-2 text-white p-4"
          />
          <button
            type="submit"
            className="p-4 bg-[#BB3800] text-white rounded-r-md font-semibold border border-[#FF4D00] hover:text-[#FF6000] hover:bg-white/70"
            >Request</button>
                
        </div>

      </div>
      <h2 hidden={!showResponse} className="text-white text-lg font-normal font-montserrat mb-4 mt-2">
        Registered your interest! We'll be in touch soon.
      </h2>
    </form>
    );
  }