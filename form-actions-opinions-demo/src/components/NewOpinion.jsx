import { useActionState, useContext } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { hasMaxLength, hasMinLength, isNotEmpty } from "../util/validations";
import Submit from "./Submit";

const NewOpinion = () => {
  const { addOpinion } = useContext(OpinionsContext);

  const shareOpinion = async (prev, formData) => {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    const errors = [];
    if (!isNotEmpty(userName)) errors.push("Please provide your name.");

    if (!isNotEmpty(title)) errors.push("Please enter title.");
    else if (!hasMinLength(title.trim(), 5))
      errors.push("Title must be atleast 5 characters long.");

    if (!isNotEmpty(body)) errors.push("Opinion cannot be empty.");
    else if (!hasMinLength(body.trim(), 10) || !hasMaxLength(body.trim(), 300))
      errors.push("Opinion must be between 10 and 300 characters long.");

    if (errors.length > 0) return { errors, values: { userName, title, body } };

    await addOpinion({ title, body, userName });
    return { errors: null };
  };

  const [formState, formAction, pending] = useActionState(shareOpinion, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.values?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.values?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.values?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
        )}
        <Submit />
      </form>
    </div>
  );
};

export default NewOpinion;
