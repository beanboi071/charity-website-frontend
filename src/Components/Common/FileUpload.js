import React, { useEffect, useState } from "react";



export default function FileUpload({ value, onChange, index, key, errors, name, disabled, formik, label }) {
  // const [imageUrl, setImageUrl] = useState<string>('');
  // const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     const files = event.target.files;
  //     setImageUrl((imageUrl: string) =>
  //       URL.createObjectURL(files[0])
  //     );
  //   }
  // };
  // useEffect(() => {
  //   setImageUrl(value);
  // }, [value])
  return (
    <div className="h-full object-cover">
      <div className="h-full">
        {label ? <p className='text-sm mb-3'>{label}</p> : null}
        <div className="flex flex-col items-center justify-center h-full  relative" key={key ?? ""}>
          {value ?
            <div className="h-full"  >
              <img
                src={value}
                alt=""
                
                className='h-full  object-cover rounded'
              />
              {/* {disabled !== true && <TrashIcon className="absolute w-5 top-2 right-2 z-99 cursor-pointer text-red-500 hover:scale-105"
                onClick={() => {
                  formik.setFieldValue(`${name}`, '')
                }}
              />} */}
            </div>
            :
            <label htmlFor="dropzone-file" className={`${disabled ? 'hover:scale-100 cursor-no-drop' : ''} flex hover:scale-105  flex-col items-center justify-center w-[100%] h-[100%]   rounded-lg cursor-pointer bg-green-200 dark:bg-green-100`}>
              <div className="w-[72px] h-[72px]"> <ImageIcon /></div>
              <input
                id="dropzone-file"
                type="file"
                disabled={disabled}
                className="hidden"
                name={name ?? "file"}
                accept="image/*"
                multiple
                onChange={(event) => {
                  if (event.target.files) {
                    const files = event.target.files;
                    if (files) {
                      onChange(files[0]);
                      // setImageUrl((imageUrl: string) =>
                      //   URL.createObjectURL(files[0])
                      // );
                    }
                  }
                }}
              />
            </label>
          }
        </div>
      </div>
    </div>
  );
}
export const ImageIcon = () => {
  return <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
    <path fill="#8CBCD6" d="M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z" />
    <circle fill="#B3DDF5" cx="35" cy="16" r="3" />
    <polygon fill="#9AC9E3" points="20,16 9,32 31,32" />
    <polygon fill="#B3DDF5" points="31,22 23,32 39,32" />
    <circle fill="#43A047" cx="38" cy="38" r="10" />
    <g fill="#fff">
      <rect x="36" y="32" width="4" height="12" />
      <rect x="32" y="36" width="12" height="4" />
    </g>
  </svg>
}