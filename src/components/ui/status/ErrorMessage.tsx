interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = "Error loading recipes" }) => {
  return (
    <div className="text-center py-8 text-xl text-gray-700">
      {message}
    </div>
  );
};
