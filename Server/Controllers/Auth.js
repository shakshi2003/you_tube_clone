import users from "../Models/Auth.js"
import jwt from "jsonwebtoken"

export const login=async(req,res)=>{
    const {email}=req.body;
    // console.log(email)
    try {
        const existinguser = await users.findOne({ email })
        if (!existinguser) {
            try {
                const newuser = await users.create({ email });
                const token = jwt.sign({
                    email: newuser.email, id: newuser._id
                }, process.env.JWT_SECERT, {
                    expiresIn: "1h"
                }
                )
                res.status(200).json({ result: newuser, token })
            } catch (error) {
                res.status(500).json({ mess: "something went wrong..." })
                return
            }

        } else {
            const token = jwt.sign({
                email: existinguser.email, id: existinguser._id
            }, process.env.JWT_SECERT, {
                expiresIn: "1h"
            }
            )
            res.status(200).json({ result: existinguser ,token})
        }
    } catch (error) {
        res.status(500).json({ mess: "something went wrong..." })
        return
    }
}