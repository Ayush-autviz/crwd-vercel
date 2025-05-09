import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ArrowLeft} from 'lucide-react';
import Link from 'next/link';
const ClaimCauseDialog: React.FC = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="text-sm cursor-pointer text-blue-600 underline">Claim this non-profit?</button>
    </DialogTrigger>
    <DialogContent className="px-0 pb-6w-full max-w-full h-screen flex flex-col justify-start items-center rounded-none md:rounded-2xl md:max-w-md md:h-auto">
      <div className="w-full px-0 pt-0 pb-0">
        
        <div className="w-full  ">
            <Link href="/href" className='md:hidden'>
        <button className='w-full h-full h-16 md:h-0 py-6 px-8 bg-gray-200   '>
            <ArrowLeft/>
        </button>
        </Link>
          <div className="text-base font-medium mb-4 px-8 bg-gry-400 pt-10 ">Claim your cause</div>
          <div className="flex items-center gap-3 px-8 bg-gry-400 pt-4 ">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Helping Humanity" className="w-12 h-12 rounded-lg object-cover" />
            <span className="font-semibold text-lg text-gray-900">Helping Humanity</span>
          </div>
          <form className="flex flex-col gap-4 px-8 bg-gry-400 pt-6 ">
            <input type="text" placeholder="Your name" className="bg-gray-100 rounded-lg px-4 py-3 text-sm outline-none placeholder-gray-400" />
            <input type="text" placeholder="Your relation to this cause" className="bg-gray-100 rounded-lg px-4 py-3 text-sm outline-none placeholder-gray-400" />
            <input type="text" placeholder="Your contact info" className="bg-gray-100 rounded-lg px-4 py-3 text-sm outline-none placeholder-gray-400" />
            <textarea placeholder="Explanation" rows={3} className="bg-gray-100 rounded-lg px-4 py-3 text-sm outline-none placeholder-gray-400 resize-none" />
            <button type="submit" className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold text-base mt-2 shadow-lg hover:bg-blue-700 transition">Submit for review</button>
          </form>
          <div className="text-xs text-gray-400 px-8 pt-6">
            Thank you! Your application will be reviewed and our team will follow up shortly with next steps. In the meantime, review some of the perks of self-managed cause profiles <a href="#" className="text-blue-600 underline">here</a>.
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default ClaimCauseDialog; 