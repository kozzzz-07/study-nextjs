import { useRouter } from "next/router";

const FormPage = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    router.push("/thanks");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          お問い合わせ内容：
          <textarea></textarea>
        </label>
        <input type="submit" value="送信" />
      </form>
    </div>
  );
};

export default FormPage;