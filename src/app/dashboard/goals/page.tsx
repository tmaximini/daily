import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// Define types for our data structure
type Category = {
  name: string;
};

type Goal = {
  id: string;
  title: string;
  description: string;
  goal_type: string;
  category: Category;
};

type TimeHorizon = {
  name: string;
};

type UserGoal = {
  id: string;
  goals: Goal;
  time_horizon: TimeHorizon;
};

export default async function GoalsPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  // Fetch goals for the current user
  const { data: goals, error } = await supabase
    .from("user_goal_habits")
    .select(
      `
      id,
      goals (
        id,
        title,
        description,
        goal_type,
        category:categories(name)
      ),
      time_horizon:time_horizons(name)
    `
    )
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching goals:", error);
    // You might want to handle this error more gracefully in your UI
  }

  console.info("Goals", goals);

  // Assert the type of goals
  const typedGoals = goals as UserGoal[] | null;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Your Goals</h1>
      {typedGoals && typedGoals.length > 0 ? (
        <ul className="space-y-4">
          {typedGoals.map((userGoal) => (
            <li key={userGoal.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{userGoal.goals.title}</h2>
              <p className="text-gray-600">{userGoal.goals.description}</p>
              <div className="mt-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  {userGoal.time_horizon.name}
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  {userGoal.goals.category.name}
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Type: {userGoal.goals.goal_type}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't set any goals yet. Start by creating a new goal!</p>
      )}
    </div>
  );
}
