import Contact from "../models/contact.model.js";
import Consult from "../models/consult.model.js";
import InternshipApplication from "../models/career.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import apiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
import { sendContactEmail, sendNotificationEmail } from "../utils/emailConfig.js";

// Contact Us
export const createContact = asyncHandler(async (req, res) => {
    try {
        const { firstname, lastname, email, phone, message } = req.body;

        // Validate required fields
        if(!firstname || !lastname || !email || !phone || !message){
            return apiResponse(res, 400, false, "All fields are required");
        }

        // Check if email already exists
        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
            return apiResponse(res, 409, false, "This email has already been registered. Please use a different email address.");
        }

        // Create new contact
        const contact = await Contact.create({
            firstname,
            lastname,
            email,
            phone,
            message
        });

        // Send emails
        try {
           
            await sendContactEmail({ firstname, lastname, email, phone, message });
            
           
            await sendNotificationEmail({ firstname, lastname, email, phone, message });
        } catch (emailError) {
            console.error("Email sending failed:", emailError);
            // Continue with the response even if email fails
        }

        // Send success response
        return apiResponse(res, 201, true, "Contact created successfully", contact);

    } catch (error) {
        console.error("Contact creation error:", error);
        return apiResponse(res, 500, false, "Failed to create contact. Please try again later.");
    }
});

// Create Consultation
export const createConsultation = asyncHandler(async (req, res) => {
    try {
        const { firstname, lastname, email, phone, message, practiceArea } = req.body;

        // Validate required fields
        if(!firstname || !lastname || !email || !phone || !message || !practiceArea){
            return apiResponse(res, 400, false, "All fields are required");
        }

        // Check if email already exists
        const existingConsultation = await Consult.findOne({ email });
        if (existingConsultation) {
            return apiResponse(res, 409, false, "This email has already been registered. Please use a different email address.");
        }

        // Create new consultation
        const consultation = await Consult.create({
            firstname,
            lastname,
            email,
            phone,
            message,
            practiceArea
        });

        // Send success response
        return apiResponse(res, 201, true, "Consultation request created successfully", consultation);

    } catch (error) {
        console.error("Consultation creation error:", error);
        return apiResponse(res, 500, false, "Failed to create consultation request. Please try again later.");
    }
});

// Create Internship Application
export const createInternshipApplication = asyncHandler(async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            university,
            graduationYear,
            practiceArea,
            resume,
            coverLetter,
            message
        } = req.body;

        // Validate required fields
        if(!firstName || !lastName || !email || !phone || !university || !graduationYear || !practiceArea || !resume){
            return apiResponse(res, 400, false, "Required fields are missing");
        }

        // Check if email already exists
        const existingApplication = await InternshipApplication.findOne({ email });
        if (existingApplication) {
            return apiResponse(res, 409, false, "This email has already been registered. Please use a different email address.");
        }

        // Create new application
        const application = await InternshipApplication.create({
            firstName,
            lastName,
            email,
            phone,
            university,
            graduationYear,
            practiceArea,
            resume,
            coverLetter,
            message
        });

        // Send success response
        return apiResponse(res, 201, true, "Internship application submitted successfully", application);

    } catch (error) {
        console.error("Internship application error:", error);
        return apiResponse(res, 500, false, "Failed to create internship application. Please try again later.");
    }
});
