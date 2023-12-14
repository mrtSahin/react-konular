import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const create = mutation({
  args: {
    text: v.string()
  },
  handler: async (ctx, args) => {
    const tasks = await ctx.db.insert('tasks', {
      text: args.text || 'untitled'

      
    })
    const user = await ctx.auth.getUserIdentity()
    console.log(user?.subject)
    return tasks
  }
})

export const update = mutation({
  args: {
    id: v.id("tasks"),
    text: v.string()
  },
  handler: async (ctx, args) => {
    console.log(args.text)
    const {id,text}=args
    console.log(await ctx.db.get(id))
    const tasks = ctx.db.patch(id,{text})
    return tasks

  }
})