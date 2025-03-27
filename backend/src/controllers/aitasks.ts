import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'

dotenv.config(); 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!); 
const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash'
})


const generatePriority = (grievanceTitle: string, grievanceDescription: string) => {

    console.log(grievanceDescription, grievanceTitle)

    const prompt = `You are a AI Employed to check people's grievance reports, basically
                    as a grievance inspector, this is the title of the current grievance: ${grievanceTitle} and the description of the grievance: ${grievanceDescription}
                    Now I want you to return a simple choice of three - Either the priority level can be HIGH, MEDIUM or LOW. 
                    I want you to only return one of these three values as your answer, not even a two word answer, it should be a one word answer - HIGH / MEDIUM / LOW
                    It is very important that your response is one of these three - HIGH, MEDIUM OR LOW, You can go ahead and give the answer now
                    Before you answer, I want you to know that a HIGH level grievance is what's needed to be solved by the state government immediately, 
                    MEDIUM level is problems that need to be taken a look at by the state government, and LOW level problems are those which do not concern the government at all`                const result = model.generateContent(prompt); 

        const priority = (await result).response.text()

        return priority;
   
}

export default generatePriority



