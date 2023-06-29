import { transporter, mailOption } from "@/config/nodemailer";

const handler = async (req, res) => {
    const data = req.body
    if(req.method === 'POST'){
        if(!data || !data.name || !data.email || !data.contact || !data.message){
          return res.status(400).json({message:"Bad request"})  
        }
    }

try {

    await transporter.sendMail({
        ...mailOption,
        subject:`You have new mail from ${data.name}`,
        text:"This is a text string",
        html:`<h3>Hello Solar Solutions,</h3> <br>
        <p>${data.message}</p><br>
        <p>Mobile:${data.contact}</p><br>
        <p>Email:${data.email}</p>`
    })
    return res.status(200).json({ msg: 'Email Sent' })
    
} catch (error) {
    return res.status(400).json({message:error.message})
    
}

  };
  
  export default handler;