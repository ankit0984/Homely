"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {  Phone, MapPin, Mail } from 'lucide-react';
import Form from './Form';


export default function ContactPage () {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            We&apos;d love to hear from you. Let&apos;s create something beautiful together.
          </p>
        </motion.div>

        <div className="mt-8 bg-white shadow-2xl sm:rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Form */}
            <div className="p-6 sm:p-12 md:border-r border-gray-200">
              <Form/>
            </div>

            {/* Contact Information */}
            <div className="p-6 sm:p-12 bg-contact text-secondary flex flex-col justify-between h-[auto]">
              <div className='container p-4 border rounded-lg backdrop-blur-2  bg-white z-1'>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
                <div className="space-y-4">
                  <a href="tel:+15551234567" className="flex items-center hover:text-indigo-600 transition-colors">
                    <Phone className="h-6 w-6 mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </a>
                  <a href="mailto:contact@interiordesign.com" className="flex items-center hover:text-indigo-600 transition-colors">
                    <Mail className="h-6 w-6 mr-2" />
                    <span>contact@interiordesign.com</span>
                  </a>
                  <a href="https://www.google.com/maps/search/?api=1&query=123+Design+Street,+Creativity+City,+IN+12345" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-indigo-600 transition-colors">
                    <MapPin className="h-6 w-6 mr-2" />
                    <span>123 Design Street, Creativity City, IN 12345</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





