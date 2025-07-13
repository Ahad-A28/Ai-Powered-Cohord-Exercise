import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { RecpieContext } from '../Context/RecpieContextWarper';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [recpie, setRecpie] = useContext(RecpieContext);
  const nagivate = useNavigate()

  const onSubmit = (data , error) => {
    data.id = nanoid();

    setRecpie((pre)=>[...pre ,data])
    
    reset();
       toast.success("Recipe created successfully!")
       nagivate("/")
       
  };
 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-10 p-10">
        <div className="w-[50%]">
           <input
            type="url"
            placeholder="Image Url"
            {...register("src", { required: "Image URL is required" })}
            className="border-b w-full outline-0"
          />
          {errors.src && <p className="text-red-500 text-sm">{errors.src.message}</p>
          }
       
          
      
        </div>

        <div className="w-[50%]">
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
            className="border-b w-full outline-0"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div className="w-[50%]">
          <input
            type="text"
            placeholder="Description"
            {...register("Des", { required: "Description is required" })}
            className="border-b w-full outline-0"
          />
          {errors.Des && <p className="text-red-500 text-sm">{errors.Des.message}</p>}
        </div>

        <div className="w-[50%]">
          <input
            type="text"
            placeholder="Ingredients"
            {...register("Ingredients", { required: "Ingredients are required" })}
            className="border-b w-full outline-0"
          />
          {errors.Ingredients && <p className="text-red-500 text-sm">{errors.Ingredients.message}</p>}
        </div>

        <div className="w-[50%]">
          <input
            type="text"
            placeholder="Chief"
            {...register("cheif", { required: "Chief is required" })}
            className="border-b w-full outline-0"
          />
          {errors.cheif && <p className="text-red-500 text-sm">{errors.cheif.message}</p>}
        </div>

        <div className="w-[50%]">
          <input
            type="text"
            placeholder="Category"
            {...register("category", { required: "Category is required" })}
            className="border-b w-full outline-0"
          />
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        <button className="bg-gray-700 text-white uppercase px-4 py-2 rounded-md cursor-pointer w-[50%] text-xl font-bold">
          Create
        </button>
      </form>
    </>
  );
};

export default Create;