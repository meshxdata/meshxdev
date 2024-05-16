import Airtable from "airtable";
import { FormEvent, useState } from "react";


export default function GetStartedForm() {
  const [email, setEmail] = useState("");
  const [showResponse, setShowResponse] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const base = new Airtable({
      apiKey:
        "patWHwBJyYO3lvQOz.7659832b0ad80b29263f0b8f802917f65c04a80320def501cf8a84f1978ad22e",
    });
  
    const table = base.base("appGNJtpLEGfEBNtN" as string).table("waitlist");
    const email_address = formData?.get("email_address") as string
    setIsLoading(true)
    if (email_address){
      await table.create({
              email: email_address,
              sentDate: new Date().toISOString(),
        });
    }
    setEmail("");
    setIsLoading(false)
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
            >
            <span hidden={isLoading}>Request</span>
            <span hidden={!isLoading}>
            <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-white animate-spin dark:text-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"></path>
              </svg>
            </span>
            </button>
                
        </div>

      </div>
      <h2 hidden={!showResponse} className="text-white text-lg font-normal font-montserrat mb-4 mt-2">
        Registered your interest! We'll be in touch soon.
      </h2>
    </form>
    );
  }