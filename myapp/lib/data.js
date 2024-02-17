'use server'
import Workout from "@/models/Workout"
import connectDB from "./db"


export const getWorkouts = async () => {
    try {
        db.connect()
        const workouts = await Workout.find({})
        return workouts
    } catch (error) {
        throw new Error("Failed to fetch contacts! " + error);
    
    }
}

