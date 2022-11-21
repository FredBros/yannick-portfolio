// thx to Elyssa Winch
//https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Submit } from "../";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStylesModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection : "column",
    gap: "30px",
    
  },
};




function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  

  // Modal

  useEffect(() => {
    Modal.setAppElement("#contact-form-container");
  }, []);

  let subtitle;
  function openModal() {
    setIsModalOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsModalOpen(false);
    setIsModalSuccess(false)
  }


  // Send Mail
  const onSubmit = (data) => {
    setIsSending(true);
    console.log("Sending...");
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      setIsSend(true);
      setIsSending(false);
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setIsModalSuccess(true)
        setIsSubmitted(true);
      } else{
        console.log("Response failed :(");
      }
      openModal();
      setTimeout(() => {
        reset();
        console.log("Button Reset");
        setIsSend(false);
        setIsSubmitted(false);
      }, 5000);
    });
  };



  return (
    <>
      <div className="contact-form-container" id="contact-form-container">
        <div className="modal-container">
          <Modal
            isOpen={isModalOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStylesModal}
            contentLabel="Modal Email Sent"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              {isModalSuccess ? null : "Erreur"}
            </h2>
            <h2>{isModalSuccess ? "Merci." : "Ooops !"}</h2>

            {isModalSuccess ? (
              <p>
                Votre message a bien été envoyé.
                <br />
                Je vous réponds rapidement.
              </p>
            ) : (
              <p>
                {" "}
                Echec de l'envoi.
                <br />
                Veuillez réessayer ultérieurement.
              </p>
            )}

            <button className="close-modal-btn to-click" onClick={closeModal}>
              Fermer
            </button>
          </Modal>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          // onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
        >
          <div className="name-email-container">
            <div className="contact-form-group">
              <label htmlFor="name">
                <h3>Nom</h3>
              </label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                {...register("name")}
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">
                <h3>Email</h3>
              </label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                {...register("email")}
              />
            </div>
          </div>
          <div className="contact-form-group">
            <label htmlFor="message">
              <h3>Message</h3>
            </label>
            <textarea
              name="message"
              rows={8}
              className="contact-form-input-textarea"
              {...register("message")}
            />
          </div>
          <div className="submit-button-container">
            <Submit
              text="Envoyer"
              isSending={isSending}
              isSend={isSend}
              isSubmitted={isSubmitted}
            />
          </div>
        </form>
      </div>

      <style jsx>{`
        .contact-form-container {
          font-size: var(--font-size-md);
        }

        .contact-form {
          border: solid 2px var(--foreground);
          padding: 40px 20px;
          max-width: 500px;
          margin: 0 auto;
        }
        .contact-form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }
        input,
        textarea {
          font-size: var(--font-size-base);
          font-family: "Open Sans", sans-serif;
          color: inherit;
          border: solid 2px var(--foreground);
          border-left: none;
          border-right: none;
        }
        input:focus,
        textarea:focus {
          outline: solid 1px var(--foreground);
        }
        textarea {
          resize: vertical;
        }
        .submit-button-container {
          text-align: center;
        }
        @media screen and (min-width: 992px) {
          .contact-form-container {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-column-gap: 25px;
            justify-items: start;
          }
          .contact-form {
            width: 100%;
            max-width: auto;
            margin: 0;
            grid-column: 3 / 10;
          }
        }
      `}</style>
    </>
  );
}

export default ContactForm;
