// import * as React from 'react'
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Send } from 'lucide-react';


// export default function Form() {
//   const [formData, setFormData] = React.useState({
//     name: '',
//     email: '',
//     message: '',
//   });
  
//   const [isSubmitting, setIsSubmitting] = React.useState(false)
//   const [submitStatus, setSubmitStatus] = React.useState(null)

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setSubmitStatus(null)

//     try {
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         setSubmitStatus('success')
//         setFormData({ name: '', email: '', message: '' })
//       } else {
//         setSubmitStatus('error')
//       }
//     } catch (error) {
//       console.error('Error:', error)
//       setSubmitStatus('error')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }
//   return (
    
//     <>
//     <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                     Name
//                   </Label>
//                   <Input
//                     type="text"
//                     name="name"
//                     id="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                     Email
//                   </Label>
//                   <Input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                   />
//                 </div>
//                 <Select>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder="Select a fruit" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Fruits</SelectLabel>
//           <SelectItem value="apple">Apple</SelectItem>
//           <SelectItem value="banana">Banana</SelectItem>
//           <SelectItem value="blueberry">Blueberry</SelectItem>
//           <SelectItem value="grapes">Grapes</SelectItem>
//           <SelectItem value="pineapple">Pineapple</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>

//                 <div>
//                   <Label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                     Message
//                   </Label>
//                   <Textarea
//                     name="message"
//                     id="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                   />
//                 </div>
//                 <Button
//         type="submit"
//         className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors flex items-center gap-2 max-w-[200px]"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? 'Sending...' : 'Send Message'}
//         <Send size={18} />
//       </Button>
//       {submitStatus === 'success' && (
//         <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
//           Thank you for your message! We&apos;ll get back to you soon.
//         </div>
//       )}
//       {submitStatus === 'error' && (
//         <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
//           An error occurred. Please try again later.
//         </div>
//       )}
//       </form>
//     </>
//   )
// }



import * as React from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send } from 'lucide-react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    projectType: '',
    roomCount: '',
    budget: '',
    timeline: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSelectChange = (id, value) => {
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', projectType: '', roomCount: '', budget: '', timeline: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div>
        <Label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
          Project Type
        </Label>
        <Select onValueChange={(value) => handleSelectChange('projectType', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Project Types</SelectLabel>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="hospitality">Hospitality</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </Label>
        <Textarea
          name="message"
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Describe your vision, style preferences, or any specific requirements..."
        />
      </div>
      <Button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors flex items-center gap-2 max-w-[200px]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send size={18} />
      </Button>
      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for your message! We&apos;ll get back to you soon with exciting ideas for your project.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          An error occurred. Please try again or contact us directly.
        </div>
      )}
    </form>
  )
}