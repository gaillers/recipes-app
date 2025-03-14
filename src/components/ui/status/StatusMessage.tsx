interface StatusMessageProps {
  message: string;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ message }) => {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-700">
      {message}
    </div>
  );
};
