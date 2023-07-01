import nodemailer from 'nodemailer'

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: 'kapan.shopping2023@gmail.com',
        pass: 'dyrsuwmgquaypayl'
      }
    })
  }
  async sendActivationMail(to, link) {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: 'Активация аккаунта на ShoppingInKapan',
        text: '',
        html: `
            <div ">
                <h1 style='font-style:cursive; color:#006699;' >Շնորհակալություն</h1>
               <p>Իսկ հիմա սեղմեք այստեղ որպեսզի ակտիվացնեք կայքը </p>
               <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gtk-go-down.svg/1024px-Gtk-go-down.svg.png' style='width:30px; height:30px;' alt='down'/>
               <a href=${link}>Ակտիվացնել Կայքը</a>
            </div>
            `
      })
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }
}

export default new MailService()
