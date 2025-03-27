import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'

dotenv.config(); 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!); 
const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash'
})

export const checkFraudulent = async (title: string, description: string) => {
    const prompt = `You are a fraudulent Grievance checker, you will get the title and description of the 
                    grievance: ${title} is the grievance title and ${description} is the grievance description
                    Kindly, tell if this is fraudulent and also strictly just give a one word answer, either true or false! AGAIN EITHER TRUE OR FALSE`

    const result = model.generateContent(prompt);

    const isFraud = (await result).response.text(); 

    return isFraud;
    
}

export const generatePriority = async (grievanceTitle: string, grievanceDescription: string) => {

    console.log(grievanceDescription, grievanceTitle)

    const prompt = `You are a AI Employed to check people's grievance reports, basically
                    as a grievance inspector, this is the title of the current grievance: ${grievanceTitle} and the description of the grievance: ${grievanceDescription}
                    Now I want you to return a simple choice of three - Either the priority level can be HIGH, MEDIUM or LOW. 
                    I want you to only return one of these three values as your answer, not even a two word answer, it should be a one word answer - HIGH / MEDIUM / LOW
                    It is very important that your response is one of these three - HIGH, MEDIUM OR LOW, You can go ahead and give the answer now
                    Before you answer, I want you to know that a HIGH level grievance is what's needed to be solved by the state government immediately, 
                    MEDIUM level is problems that need to be taken a look at by the state government, and LOW level problems are those which do not concern the government at all`                
        
        const result = model.generateContent(prompt); 

        const priority = (await result).response.text()

        return priority;
   
}

console.log(checkFraudulent("The UP Cm died", "The cm died by my hands").then(result => console.log(result)))




