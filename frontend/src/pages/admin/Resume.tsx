import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FiDownload,
  FiFileText,
  FiRefreshCw,
  FiUpload,
} from "react-icons/fi";

import {
  downloadResume,
  getResume,
  uploadResume,
  type Resume,
} from "../../services/resumeService";

const ResumePage = () => {
  const [resume, setResume] = useState<Resume | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadResume();
  }, []);

  const loadResume = async () => {
    try {
      setLoading(true);

      const data = await getResume();

      setResume(data);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to load resume."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a PDF file.");
      return;
    }

    try {
      setUploading(true);

      await uploadResume(file);

      toast.success("Resume uploaded successfully.");

      setFile(null);

      await loadResume();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.detail ??
          "Failed to upload resume."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Resume Management
        </h1>

        <p className="mt-2 text-slate-400">
          Upload and manage your latest resume.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/20">
              <FiFileText className="text-5xl text-cyan-400" />
            </div>

            <h2 className="mt-6 text-xl font-semibold text-white">
              Current Resume
            </h2>

            <p className="mt-2 text-slate-400">
              {loading
                ? "Loading..."
                : resume?.filename ??
                  resume?.file_name ??
                  "Resume Available"}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                <FiDownload />
                Download
              </button>

              <button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60"
              >
                <FiRefreshCw />
                {uploading
                  ? "Replacing..."
                  : "Replace"}
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-8">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <FiUpload className="text-6xl text-cyan-400" />

            <h2 className="mt-6 text-xl font-semibold text-white">
              Upload New Resume
            </h2>

            <p className="mt-2 text-slate-400">
              Select a PDF file to replace your existing resume.
            </p>

            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(
                  e.target.files?.[0] ?? null
                )
              }
              className="mt-8 block w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500 file:px-4 file:py-2 file:font-semibold file:text-slate-950 hover:file:bg-cyan-400"
            />

            <button
              onClick={handleUpload}
              disabled={uploading}
              className="mt-8 flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-60"
            >
              <FiUpload />
              {uploading
                ? "Uploading..."
                : "Upload Resume"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;