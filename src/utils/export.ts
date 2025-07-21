import emailjs from '@emailjs/browser';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import type { QuoteFormData } from './types';

const service_id = import.meta.env.Service_id;
const template_id = import.meta.env.Template_id;
const public_key = import.meta.env.Public_key;

export const sendQuoteEmail = async (formData: QuoteFormData, premium: number): Promise<boolean> => {
  console.log(service_id, template_id)
  console.log(public_key)
  try {
    const result = await emailjs.send(
      service_id,   
      template_id,   
      {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        vehicle_type: formData.vehicleType,
        model: formData.model,
        value: formData.value,
        coverage: formData.coverageType,
        location: formData.location,
        premium_amount: premium, 
      },
      public_key    
    );
    console.log('Email sent!', result.text);
    return true;
  } catch (error) {
    console.error('Email failed:', error);
    return false;
  }
};

export const downloadPdf = async (data: QuoteFormData, premium: number): Promise<boolean> => {
  try {
    // Create the PDF content HTML
    const pdfContent = createPDFContent(data, premium);

    const container = document.createElement('div');
    container.innerHTML = pdfContent;
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.style.width = '210mm';
    container.style.backgroundColor = 'white';

    document.body.appendChild(container);
    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 794,
      height: 1123, 
    });

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
    const filename = `${data.fullName.replace(/\s+/g, '-')}-Motor-Insurance-Quote.pdf`;
    pdf.save(filename);
    
    // Clean up
    document.body.removeChild(container);
    
    return true;
  } catch (error) {
    console.error('PDF generation failed:', error);
    return false;
  }
};

const createPDFContent = (data: QuoteFormData, premium: number): string => {
  const quoteId = `MG-${Date.now().toString().slice(-6)}`;
  const currentDate = new Date().toLocaleDateString('en-GB');
  const validUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB');
  
  return `
    <div style="
      width: 210mm;
      min-height: 297mm;
      padding: 0;
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: white;
      box-sizing: border-box;
    ">
      <!-- Header -->
      <div style="
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 20px;
        margin: 0;
        position: relative;
        overflow: hidden;
      ">
        <!-- Header Background Pattern -->
        <div style="
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        "></div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 1;">
          <div style="display: flex; align-items: center; gap: 15px;">
            <!-- Logo Circle -->
            <div style="
              width: 60px;
              height: 60px;
              background: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-weight: bold;
              color: #10b981;
            ">MG</div>
            
            <div>
              <h1 style="margin: 0; font-size: 28px; font-weight: bold;">MotorGuard</h1>
              <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Powered by Hobbiton Technologies</p>
            </div>
          </div>
          
          <div style="text-align: right; font-size: 12px;">
            <p style="margin: 0; font-weight: bold;">Quote ID: ${quoteId}</p>
            <p style="margin: 5px 0 0 0;">Date: ${currentDate}</p>
            <p style="margin: 5px 0 0 0;">Valid Until: ${validUntil}</p>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div style="padding: 30px;">
        <!-- Title -->
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="
            font-size: 36px;
            font-weight: bold;
            color: #1f2937;
            margin: 0 0 10px 0;
          ">Motor Insurance Quote</h2>
          <div style="
            width: 80px;
            height: 4px;
            background: linear-gradient(to right, #10b981, #ef4444);
            margin: 0 auto;
            border-radius: 2px;
          "></div>
        </div>

        <!-- Premium Highlight -->
        <div style="
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 25px;
          border-radius: 15px;
          text-align: center;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
        ">
          <h3 style="margin: 0 0 10px 0; font-size: 18px; font-weight: normal; opacity: 0.9;">Total Premium</h3>
          <div style="font-size: 42px; font-weight: bold; margin: 0;">ZMW ${premium.toLocaleString()}</div>
          <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">${data.value} per month</p>
        </div>

        <!-- Information Cards Grid -->
        <div style="display: grid; grid-template-columns: 1fr; gap: 25px; margin-bottom: 30px;">
          
          <!-- Personal Information Card -->
          <div style="
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          ">
            <div style="
              background: #3b82f6;
              color: white;
              padding: 15px;
              font-weight: bold;
              font-size: 16px;
            ">
              👤 Personal Information
            </div>
            <div style="padding: 20px;">
              <div style="margin-bottom: 12px;">
                <span style="font-weight: bold; color: #374151;">Full Name:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.fullName}</span>
              </div>
              <div style="margin-bottom: 12px;">
                <span style="font-weight: bold; color: #374151;">Phone:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.phone}</span>
              </div>
              <div style="margin-bottom: 12px;">
                <span style="font-weight: bold; color: #374151;">Email:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.email}</span>
              </div>
              <div style="margin-bottom: 0;">
                <span style="font-weight: bold; color: #374151;">NRC:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.nrc}</span>
              </div>
            </div>
          </div>

          <!-- Vehicle Information Card -->
          <div style="
            background: #fef7f0;
            border: 1px solid #fed7aa;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          ">
            <div style="
              background: #ea580c;
              color: white;
              padding: 15px;
              font-weight: bold;
              font-size: 16px;
            ">
              🚗 Vehicle Information
            </div>
            <div style="padding: 20px;">
              <div style="margin-bottom: 12px;">
                <span style="font-weight: bold; color: #374151;">Vehicle:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.make} ${data.model} (${data.year})</span>
              </div>
              <div style="margin-bottom: 12px;">
                <span style="font-weight: bold; color: #374151;">Type:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.vehicleType}</span>
              </div>
              <div style="margin-bottom: 12px;">
                <span style="font-weight: bold; color: #374151;">Value:</span><br>
                <span style="color: #6b7280; font-size: 14px;">ZMW ${parseInt(data.value).toLocaleString()}</span>
              </div>
              <div style="margin-bottom: 0;">
                <span style="font-weight: bold; color: #374151;">Usage:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.usage}</span>
              </div>
            </div>
          </div>

          <!-- Driver Information Card -->
          <div style="
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          ">
            <div style="
              background: #0284c7;
              color: white;
              padding: 15px;
              font-weight: bold;
              font-size: 16px;
            ">
              🚦 Driver Information
            </div>
            <div style="padding: 20px;">
              <div style="margin-bottom: 12px;">
                <span style="font-weight: bold; color: #374151;">Age:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.driverAge} years</span>
              </div>
              <div style="margin-bottom: 12px;">
                <span style="font-weight: bold; color: #374151;">Experience:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.experience} years</span>
              </div>
              <div style="margin-bottom: 0;">
                <span style="font-weight: bold; color: #374151;">Location:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.location}</span>
              </div>
            </div>
          </div>

          <!-- Coverage Information Card -->
          <div style="
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          ">
            <div style="
              background: #16a34a;
              color: white;
              padding: 15px;
              font-weight: bold;
              font-size: 16px;
            ">
              🛡️ Coverage Information
            </div>
            <div style="padding: 20px;">
              <div style="margin-bottom: 12px;">
                <span style="font-weight: bold; color: #374151;">Coverage Type:</span><br>
                <span style="color: #6b7280; font-size: 14px;">${data.coverageType}</span>
              </div>
              <div style="margin-bottom: 0;">
                <span style="font-weight: bold; color: #374151;">Policy Term:</span><br>
                <span style="color: #6b7280; font-size: 14px;">12 months</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Coverage Benefits -->
        <div style="
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 30px;
        ">
          <h3 style="
            color: #1f2937;
            font-size: 20px;
            font-weight: bold;
            margin: 0 0 20px 0;
          ">✅ Coverage Benefits</h3>
          
          <div style="display: grid; grid-template-columns: 1fr; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="color: #10b981; font-size: 18px;">✓</span>
              <span style="color: #374151; font-size: 14px;">Comprehensive vehicle protection</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="color: #10b981; font-size: 18px;">✓</span>
              <span style="color: #374151; font-size: 14px;">Third-party liability coverage</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="color: #10b981; font-size: 18px;">✓</span>
              <span style="color: #374151; font-size: 14px;">24/7 roadside assistance</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="color: #10b981; font-size: 18px;">✓</span>
              <span style="color: #374151; font-size: 14px;">Theft and fire protection</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="color: #10b981; font-size: 18px;">✓</span>
              <span style="color: #374151; font-size: 14px;">Natural disaster coverage</span>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="color: #10b981; font-size: 18px;">✓</span>
              <span style="color: #374151; font-size: 14px;">Personal accident cover</span>
            </div>
          </div>
        </div>

        <!-- Important Notes -->
        <div style="
          background: #fef3c7;
          border: 1px solid #fbbf24;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 30px;
        ">
          <h4 style="
            color: #92400e;
            font-size: 16px;
            font-weight: bold;
            margin: 0 0 10px 0;
          ">⚠️ Important Notes</h4>
          <ul style="
            color: #92400e;
            font-size: 14px;
            margin: 0;
            padding-left: 20px;
          ">
            <li>This quote is valid for 30 days from the date of issue</li>
            <li>Final premium may vary based on vehicle inspection</li>
            <li>All coverage is subject to policy terms and conditions</li>
            <li>Contact us for any questions or clarifications</li>
          </ul>
        </div>
      </div>

      <!-- Footer -->
      <div style="
        background: #1f2937;
        color: white;
        padding: 25px;
        margin-top: auto;
      ">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h4 style="margin: 0 0 10px 0; font-size: 18px; font-weight: bold;">Contact Us</h4>
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">📧 info@motorguard.zm</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">📞 +260 123 456 789</p>
          </div>
          
          <div style="text-align: right;">
            <p style="margin: 0; font-size: 12px; opacity: 0.7;">© 2025 MotorGuard</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.7;">Powered by Hobbiton Technologies</p>
          </div>
        </div>
      </div>
    </div>
  `;
};