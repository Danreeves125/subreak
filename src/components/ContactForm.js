import React, { useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"

import Swal from "sweetalert2"

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm()

    const [successMessage, setSuccessMessage] = useState("")

    function onSubmit(data, e) {
        axios
            .post("https://eoslthpkyhra9ni.m.pipedream.net", data)
            .then((reponse) => {
                reset()

                Swal.fire({
                    title: "Thanks",
                    text: "Do you want to continue",
                    icon: "success",
                    confirmButtonText: "Close",
                })
            })
            .catch((e) => console.error(e))
    }

    return (
        <form className="mx-auto max-w-[72rem] px-[2rem]" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__group">
                <label className="form__label" htmlFor="">
                    Name
                </label>
                <input className="w-full h-[5rem] text-[1.6rem]" {...register("name")}></input>
            </div>

            <div className="form__group">
                <label className="form__label" htmlFor="">
                    Starter
                </label>
                <label className="radio" htmlFor="">
                    <input {...register("starter")} type="radio" value="soup" defaultChecked />
                    <span></span>
                    <span>Leek & Potato Soup - Garnished with deep fried leeks (VG)</span>
                </label>
            </div>

            <div className="form__group">
                <label htmlFor="" className="form__label">
                    Main Course
                </label>

                <div className="flex items-start flex-col">
                    <label className="radio" htmlFor="chicken">
                        <input id="chicken" {...register("main")} type="radio" value="chicken" />
                        <span></span>
                        <span>Breast Of Chicken wrapped in pancetta in a cream sauce (GF)</span>
                    </label>

                    <label className="radio" htmlFor="rissotto">
                        <input id="rissotto" {...register("main")} type="radio" value="rissotto" hidden />
                        <span></span>
                        <span>Quinoa Risotto with halloumi, sweet potato & curried cauliflower (V)</span>
                    </label>
                </div>
            </div>

            <div className="form__group">
                <label htmlFor="" className="form__label">
                    Dessert
                </label>

                <div className="flex items-start flex-col">
                    <label className="radio" htmlFor="tart">
                        <input id="tart" {...register("dessert")} type="radio" value="brownie" />
                        <span></span>
                        <span>Chocolate brownie with vanilla ice-cream (V, GF)</span>
                    </label>

                    <label className="radio" htmlFor="brownie">
                        <input id="brownie" {...register("dessert")} type="radio" value="tart" />
                        <span></span>
                        <span>Salted caramel & chocolate tart with cookie dough ice-cream & toffee sauce (V, GF)</span>
                    </label>
                </div>
            </div>

            <div className="form__group">
                <label className="form__label" htmlFor="">
                    Dietary Requirments
                </label>
                <textarea className="w-full h-[15rem]" {...register("dietary_requirements", {})} />
            </div>

            <button className="button button--black" role="submit">
                {isSubmitting ? "Submitting" : "Submit"}
            </button>
            {successMessage && <p>{successMessage}</p>}
        </form>
    )
}
