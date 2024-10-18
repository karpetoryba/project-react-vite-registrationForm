type PersonalInformationProps = {
  formData: {
    name: string;
    email: string;
    password: string;
  };
  setFormData: (data: any) => void;
};
const PersonalInformation = ({
  formData,
  setFormData,
}: PersonalInformationProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <p className="text-xs">Name</p>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className="w-96 border border-gray-300 p-2 rounded mb-4 bg-slate-50 "
      />
      <p className="text-xs">Email</p>
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="w-96 border border-gray-300 p-2 rounded mb-4 bg-slate-50"
      />
      <p className="text-xs">Password</p>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
        className="w-96 border border-gray-300 p-2 rounded mb-4 bg-slate-50"
      />
    </div>
  );
};

export default PersonalInformation;
