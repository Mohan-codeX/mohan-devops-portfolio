
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiEye, FiMail, FiTrash2, FiUser } from "react-icons/fi";

import {
  deleteContact,
  getContacts,
  updateContact,
  type Contact,
} from "../../services/contactService";


const Messages = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selected, setSelected] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      setLoading(true);
      setContacts(await getContacts());
    } catch (e: any) {
      toast.error(e?.response?.data?.detail ?? "Failed to load contacts.");
    } finally {
      setLoading(false);
    }
  };

  const handleView = async (c: Contact) => {
    setSelected(c);
    if (!c.is_read && c.id) {
      try {
        await updateContact(c.id, { ...c, is_read: true });
        await loadContacts();
      } catch {}
    }
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;
    if (!window.confirm("Delete this contact message?")) return;
    try {
      await deleteContact(id);
      toast.success("Message deleted.");
      if (selected?.id === id) setSelected(null);
      await loadContacts();
    } catch (e:any) {
      toast.error(e?.response?.data?.detail ?? "Failed to delete message.");
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Contact Messages</h1>
        <p className="mt-2 text-slate-400">Manage messages submitted through your portfolio.</p>
      </div>

      {selected && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-3">
          <div className="text-white font-semibold">{selected.subject}</div>
          <div className="text-slate-300">{selected.name} ({selected.email})</div>
          <div className="whitespace-pre-wrap text-slate-300">{selected.message}</div>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        {loading ? (
          <div className="p-8 text-center text-white">Loading messages...</div>
        ) : (
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm text-slate-300">Name</th>
              <th className="px-6 py-4 text-left text-sm text-slate-300">Email</th>
              <th className="px-6 py-4 text-left text-sm text-slate-300">Subject</th>
              <th className="px-6 py-4 text-left text-sm text-slate-300">Status</th>
              <th className="px-6 py-4 text-center text-sm text-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c=>(
              <tr key={c.id} className="border-t border-slate-800">
                <td className="px-6 py-5"><div className="flex items-center gap-3"><FiUser className="text-cyan-400"/><span className="text-white">{c.name}</span></div></td>
                <td className="px-6 py-5 text-slate-300">{c.email}</td>
                <td className="px-6 py-5 text-slate-300">{c.subject}</td>
                <td className="px-6 py-5"><span className={`rounded-full px-3 py-1 text-sm ${c.is_read?"bg-slate-700 text-slate-300":"bg-cyan-500/20 text-cyan-400"}`}>{c.is_read?"Read":"New"}</span></td>
                <td className="px-6 py-5">
                  <div className="flex justify-center gap-3">
                    <button onClick={()=>handleView(c)} className="rounded-lg bg-slate-800 p-2 text-cyan-400 hover:bg-slate-700"><FiEye/></button>
                    <button onClick={()=>handleView(c)} className="rounded-lg bg-slate-800 p-2 text-yellow-400 hover:bg-slate-700"><FiMail/></button>
                    <button onClick={()=>handleDelete(c.id)} className="rounded-lg bg-slate-800 p-2 text-red-400 hover:bg-slate-700"><FiTrash2/></button>
                  </div>
                </td>
              </tr>
            ))}
            {contacts.length===0&&(
              <tr><td colSpan={5} className="py-8 text-center text-slate-400">No messages found.</td></tr>
            )}
          </tbody>
        </table>)}
      </div>
    </div>
  );
};

export default Messages;
