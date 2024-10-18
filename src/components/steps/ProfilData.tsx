type ProfilDataProps = {
  formData: {
    age: string;
    interest: string;
    bio: string;
  };
  setFormData: (data: any) => void;
};
const ProfilData = ({ formData, setFormData }: ProfilDataProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <p className="text-xs">Age</p>
      <input
        type="text"
        name="age"
        placeholder="Enter your age"
        value={formData.age}
        onChange={handleChange}
        className="w-96 border border-gray-300 p-2 rounded mb-4 bg-slate-50"
      />
      <p className="text-xs">Area of interest</p>
      <input
        type="text"
        name="interest"
        placeholder="Area of interest"
        value={formData.interest}
        onChange={handleChange}
        className="w-96 border border-gray-300 p-2 rounded mb-4 bg-slate-50"
      />
      <p className="text-xs">Bio/Description</p>
      <input
        type="text"
        name="bio"
        placeholder="Enter your bio"
        value={formData.bio}
        onChange={handleChange}
        className="w-96 border border-gray-300 p-2 rounded mb-4 bg-slate-50"
      />
    </div>
  );
};

export default ProfilData;
