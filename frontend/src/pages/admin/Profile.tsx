import { useEffect, useState } from "react";
import {
  FiCamera,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSave,
  FiUser,
} from "react-icons/fi";
import toast from "react-hot-toast";

import {
  getProfile,
  createProfile,
  updateProfile,
  type Profile as ProfileType,
} from "../../services/profileService";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profileExists, setProfileExists] = useState(true);

  const [profile, setProfile] = useState<ProfileType>({
    full_name: "",
    title: "",
    tagline: "",
    about: "",
    email: "",
    phone: "",
    location: "",
    github: "",
    linkedin: "",
    website: "",
    profile_image: "",
    years_of_experience: 0,
    projects_completed: 0,
    certifications: 0,
    resume_title: "",
    resume_description: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);

      const data = await getProfile();

      setProfile({
        ...data,
        tagline: data.tagline ?? "",
        years_of_experience: Number(data.years_of_experience ?? 0),
        projects_completed: Number(data.projects_completed ?? 0),
        certifications: Number(data.certifications ?? 0),
        resume_title: data.resume_title ?? "",
        resume_description: data.resume_description ?? "",
      });

      setProfileExists(true);
    } catch (error: any) {
      if (error?.response?.status === 404) {
        setProfileExists(false);
      } else {
        toast.error(
          error?.response?.data?.detail ?? "Failed to load profile."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const numericFields = [
      "years_of_experience",
      "projects_completed",
      "certifications",
    ];

    setProfile({
      ...profile,
      [name]: numericFields.includes(name)
        ? Number(value)
        : value,
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      if (profileExists) {
        const updated = await updateProfile(profile);
        setProfile(updated);

        toast.success("Profile updated successfully.");
      } else {
        const created = await createProfile(profile);

        setProfile(created);
        setProfileExists(true);

        toast.success("Profile created successfully.");
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ?? "Failed to save profile."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Profile
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your portfolio profile information.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col items-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-cyan-500 text-slate-950">
              <FiUser size={50} />
            </div>

            <button
              type="button"
              className="mt-6 flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400"
            >
              <FiCamera />
              Change Photo
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 lg:col-span-2">
          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Full Name
              </label>

              <input
                name="full_name"
                value={profile.full_name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Role
              </label>

              <input
                name="title"
                value={profile.title}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-slate-400">
                Tagline
              </label>

              <input
                name="tagline"
                value={profile.tagline}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                <FiMail />
                Email
              </label>

              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                <FiPhone />
                Phone
              </label>

              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                <FiMapPin />
                Location
              </label>

              <input
                name="location"
                value={profile.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Years of Experience
              </label>

              <input
                type="number"
                name="years_of_experience"
                value={profile.years_of_experience}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Projects Completed
              </label>

              <input
                type="number"
                name="projects_completed"
                value={profile.projects_completed}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-slate-400">
                Certifications
              </label>

              <input
                type="number"
                name="certifications"
                value={profile.certifications}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-slate-400">
                About
              </label>

              <textarea
                rows={6}
                name="about"
                value={profile.about}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Resume Title
              </label>

              <input
                name="resume_title"
                value={profile.resume_title}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                GitHub
              </label>

              <input
                name="github"
                value={profile.github}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                LinkedIn
              </label>

              <input
                name="linkedin"
                value={profile.linkedin}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-slate-400">
                Website
              </label>

              <input
                name="website"
                value={profile.website}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-slate-400">
                Resume Description
              </label>

              <textarea
                rows={4}
                name="resume_description"
                value={profile.resume_description}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
            </div>

          </div>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-60"
            >
              <FiSave />
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
