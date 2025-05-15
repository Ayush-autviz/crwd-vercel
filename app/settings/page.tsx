import { accountItems, financialItems, helpItems } from "@/lib/setting/settings";
import SettingsGroup from "../../components/settings/SettingsGroup";
import ProfileNavbar from "@/components/profile/ProfileNavbar";


const SettingsPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
        <ProfileNavbar title="Settings" />
      <div className="flex-1 w-full bg-white md:rounded-2xl  mt-0 md:mt-8 overflow-hidden flex flex-col">
        <SettingsGroup heading="Your account" items={accountItems} />
        <SettingsGroup heading="Financials" items={financialItems} />
        <SettingsGroup heading="Help Center" items={helpItems} />
        <div className="flex items-center justify-between px-6 py-8 mt-auto">
          <button className="text-red-500 font-medium">Sign out</button>
          <button className="bg-blue-600 text-white rounded-full px-12 py-2 font-semibold shadow hover:bg-blue-700 transition">Save</button>
        </div>
      </div>
      <div className="h-20"/>
    </div>
  );
};

export default SettingsPage; 


