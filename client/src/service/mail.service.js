import axios from 'axios'

export default class MailService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/mail',
            withCredentials: true
        })
    }

    
    sendMail = mailInfo => this.apiHandler.post(`/send-email`, mailInfo)
}