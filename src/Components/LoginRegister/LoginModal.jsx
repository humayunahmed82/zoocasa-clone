import React from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";

const LoginModal = (props) => {
    return (
        <Modal className="max-w-md p-12" onClose={props.onClose}>
            <button className="absolute top-6 right-6" onClick={props.onClose}>
                <MdClose className="text-2xl" />
            </button>
            <form action="">
                <div className="space-y-3">
                    <h2 className="text-2xl font-normal font-frank">Sign In</h2>
                    <p className="text-[15px]">
                        With a Zoocasa account you gain free access to:
                    </p>
                    <ul className="text-[15px] list-disc pl-4">
                        <li>Exclusive property listings updated hourly</li>
                        <li>
                            Photos, property details &amp; price history
                            information
                        </li>
                        <li>Favourite homes &amp; save searches</li>
                        <li>Market Insights &amp; alerts sent to your inbox</li>
                    </ul>
                </div>
                <div className="mt-6 space-y-4">
                    <div className="">
                        <Input
                            input={{
                                type: "email",
                                placeholder: "Email Address",
                            }}
                        />
                    </div>
                    <div className="">
                        <Input
                            input={{
                                type: "password",
                                placeholder: "Password",
                            }}
                        />
                    </div>
                    <div className="">
                        <p>
                            <button
                                type="button"
                                className="text-sm text-[#4695c4] hover:text-body hover:underline"
                                onClick={props.onForgot}
                            >
                                Forgot Password?
                            </button>
                        </p>
                    </div>
                    <div className="">
                        <Button className="w-full bg-primary hover:bg-secondary text-white lg:h-10">
                            Sign In
                        </Button>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">
                            Don't have an account?
                            <button
                                type="button"
                                className="text-[#4695c4] hover:text-body hover:underline ml-1"
                                to="/"
                            >
                                Create An Account
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default LoginModal;
