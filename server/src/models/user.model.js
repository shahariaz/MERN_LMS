import mongoose, { Mongoose } from "mongoose";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
      select: false,
    },
    role: {
      type: String,
      enum: ["student", "instructor"],
      default: "student",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    enrolledCourse: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    profileImage: String,
    bio: String,
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String,
    },
    emailVerificationToken: String,
    emailVerificationTokenExpiresAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpiresAt: Date,
  },
  {
    timestamps: true,
  }
);

// Hashing password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// User model method to compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// User model method to Create JWT token

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};
const User = mongoose.model("User", userSchema);
export default User;
