import mongoose from "mongoose";


const WorkoutSchema = new mongoose.Schema({
    creator: String,
    title: String,
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
  }, {timestamps: true})

export default mongoose?.models?.Workout || mongoose.model("Workout", WorkoutSchema)