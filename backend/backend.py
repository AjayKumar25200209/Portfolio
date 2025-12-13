from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

SENDER_EMAIL = "ajayjeyapal@gmail.com"
SENDER_PASSWORD = "vxclabpkwfwwjhma"
RECEIVER_EMAIL = "ajaykumarjeyapal25@gmail.com"

@app.post("/send-email")
async def send_email(contact: ContactRequest):
    try:
        # User's requested logic
        message2 = MIMEMultipart()
        message2["from"] = SENDER_EMAIL
        message2["to"] = RECEIVER_EMAIL
        message2["subject"] = f"New Portfolio Contact from {contact.name}"
        
        # HTML Content
        html_content = f"""
        <html>
            <body>
                <h2>New Contact Request</h2>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Message:</strong></p>
                <p>{contact.message}</p>
            </body>
        </html>
        """
        message2.attach(MIMEText(html_content, "html"))

        smtp_server = "smtp.gmail.com"
        port = 587

        server = smtplib.SMTP(smtp_server, port)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, message2.as_string())
        server.quit()

        return {"message": "Email sent successfully"}
    
    except Exception as e:
        print(f"Error sending email: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
