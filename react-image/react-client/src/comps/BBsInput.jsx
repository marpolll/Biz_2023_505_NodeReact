import { useState } from "react";
import { filePreview, filesPreview } from "../modules/ImagePreview";
import css from "../css/BBsInput.module.css";
import "../css/Test.css";
import { useBBsContext } from "../provider/BBsProvider";

const BBsInput = () => {
  const { bbs, setBBs, bbsInsertCB, imgRef, imgsRef } = useBBsContext();

  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);

  const setMainImage = (image) => {
    setImage(image);
  };

  const thumbImages = images.map((image) => {
    return (
      <img
        src={image}
        width="50px"
        alt=""
        onClick={(e) => setMainImage(image)}
      />
    );
  });

  const fileChangeHandler = async (e) => {
    console.log("file Change");
    const imgSrc = await filePreview(e.target.files[0]);

    setImage(imgSrc);
  };

  const filesChangHandler = async (e) => {
    const files = e.target.files;
    console.log(files);
    const imgSrcList = await Promise.all(filesPreview(files));

    setImages(imgSrcList);
  };

  const inputChangHandler = (e) => {
    const { name, value } = e.target;
    setBBs({ ...bbs, [name]: value });
  };

  const insertButtonClickHandler = async () => {
    bbsInsertCB();
    setMainImage();
  };

  return (
    <section className={css.main}>
      <div className={css.input_container}>
        <div>
          <input
            name="b_title"
            placeholder="제목"
            value={bbs.b_title}
            onChange={inputChangHandler}
          />
        </div>

        <div>
          <input
            name="b_content"
            placeholder="내용"
            value={bbs.b_content}
            onChange={inputChangHandler}
          />
        </div>
      </div>

      <div className={css.image_box_none}>
        <label htmlFor="main_image" class="btn">
          메인사진
        </label>

        <input
          id="main_image"
          type="file"
          accept="image/*"
          onChange={fileChangeHandler}
          ref={imgRef}
        />

        <div className={css.thumb}>
          <img src={image ? image : ""} width="100px" />
        </div>
      </div>
      <div className={css.image_box}>
        <div>
          <label htmlFor="gallery_image" class="btn">
            이미지 업로드
          </label>

          <input
            id="gallery_image"
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={filesChangHandler}
            ref={imgsRef}
          />
          <div className={css.thumb}>{thumbImages}</div>
        </div>
      </div>
      <button class="custom-btn btn-12" onClick={insertButtonClickHandler}>
        <span>Click!</span>
        <span>SAVE</span>
      </button>
      <div className="view"></div>
    </section>
  );
};
export default BBsInput;
