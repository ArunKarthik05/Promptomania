import React from "react";
import Link from "next/link";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} & Join forces with fellow creators in the Promptomania community.
        Collaborate, merge ideas, and witness the magic that unfolds when minds
        synergize. <b className="blue_gradient">Promptomania</b> is the space
        where sparks fly, and extraordinary creations are born.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-x-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Spark your imaginations
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Spread your creativity"
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal">
              (#Software, #javascript, #WebDevelopment)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            className="form_input"
            required
          />
        </label>
        <div className="flex-end m-x-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-md">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-md bg-primary-orange rounded-full text-white hover:bg-orange-800 transition-all"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
