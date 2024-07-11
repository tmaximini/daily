import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// Define types for our data structure
type Category = {
  name: string;
};

type Goal = {
  id: string;
  title: string;
};

type Habit = {
  id: string;
  title: string;
  description: string;
  category: Category;
  parent_goal: Goal | null;
};

type TimeHorizon = {
  name: string;
};

type UserHabit = {
  id: string;
  frequency: string;
  habit: Habit;
  time_horizon: TimeHorizon;
};

export default async function HabitsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  // Fetch habits for the current user
  const { data: habits, error } = await supabase
    .from("user_goal_habits")
    .select(
      `
    id,
    frequency,
    habit:goals!inner(
      id,
      title,
      description,
      category:categories(name)
    ),
    time_horizon:time_horizons(name)
  `
    )
    .eq("user_id", user.id)
    .eq("goals.is_habit", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching habits:", error);
    // You might want to handle this error more gracefully in your UI
  }

  // Assert the type of habits
  const typedHabits = habits as UserHabit[] | null;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Your Habits</h1>
      {typedHabits && typedHabits.length > 0 ? (
        <ul className="space-y-4">
          {typedHabits.map((userHabit) => (
            <li key={userHabit.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{userHabit.habit.title}</h2>
              <p className="text-gray-600">{userHabit.habit.description}</p>
              <div className="mt-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  {userHabit.time_horizon.name}
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  {userHabit.habit.category.name}
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Frequency: {userHabit.frequency}
                </span>
              </div>
              {userHabit.habit.parent_goal && (
                <div className="mt-2">
                  <p className="text-sm font-medium">Related Goal:</p>
                  <p className="text-sm text-gray-600">
                    {userHabit.habit.parent_goal.title}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't set any habits yet. Start by creating a new habit!</p>
      )}
    </div>
  );
}
