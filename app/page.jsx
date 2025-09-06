import React from 'react'
<a href={`https://wa.me/919931052652?text=${encodeURIComponent('Hi! I want to place a custom order for a cake.')}`} className="inline-block px-4 py-2 bg-green-400 rounded-md text-white">Message on WhatsApp</a>
<a href={`mailto:yourbakery@example.com?subject=${encodeURIComponent('Custom Cake Inquiry')}&body=${encodeURIComponent('Hi, I would like to inquire about a custom cake for...')}`} className="inline-block ml-2 px-4 py-2 border rounded-md">Email us</a>
</div>
</div>
<form className="bg-white rounded-xl p-6 shadow">
<div className="grid grid-cols-1 gap-3">
<input className="border rounded-md p-3" placeholder="Your name" />
<input className="border rounded-md p-3" placeholder="Phone or WhatsApp" />
<input className="border rounded-md p-3" placeholder="Event date" />
<textarea className="border rounded-md p-3" placeholder="Tell us your idea (flavor, size, theme)" rows={4}></textarea>
<div className="flex items-center gap-3">
<button type="button" className="px-4 py-2 bg-pink-300 text-white rounded-md">Send Inquiry</button>
<small className="text-xs text-gray-500">We will reply within 24 hours</small>
</div>
</div>
</form>
</div>
)
}


function Footer(){
return (
<footer className="mt-12 border-t bg-white/60">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div>
<h5 className="font-semibold">Tales of the Cake</h5>
<p className="text-sm text-gray-600">Made with ❤️. Pickup & delivery across town.</p>
</div>
<div className="text-sm text-gray-600">Contact: <a href="tel:+919931052652" className="text-pink-500">+91 9931052652</a> • <a href="#" className="ml-3 text-pink-500">Instagram</a></div>
</div>
</footer>
)
}
