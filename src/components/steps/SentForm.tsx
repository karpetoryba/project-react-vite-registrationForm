type SentFormProps = {
  formData: {
    name: string;
    email: string;
  };
};

const SentForm = ({ formData }: SentFormProps) => {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      <div className="bg-green-500 text-white rounded-full text-6xl p-8 mb-4 w-24 h-24 flex items-center justify-center">
        <span className="text-white text-5xl">✓</span>
      </div>

      <p className="text-2xl font-bold break-words">
        Поздравляем, {formData.name}
      </p>
      <p className="text-xl font-bold break-words">Регистрация успешна</p>
      <p className="text-lg font-bold break-words">
        Подтверждение отправлено на {formData.email}
      </p>
    </div>
  );
};

export default SentForm;
