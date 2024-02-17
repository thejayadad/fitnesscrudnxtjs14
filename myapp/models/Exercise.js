import mongoose from "mongoose";


const ExerciseSchema = new mongoose.Schema({
    name: { type: String },
    duration: { type: Number }, 
    calories: { type: Number },
    notes: { type: String },
    workoutId: { type: mongoose.Schema.Types.ObjectId, ref: 'Workout' },

  });

export default mongoose?.models?.Exercise || mongoose.model("Exercise", ExerciseSchema)