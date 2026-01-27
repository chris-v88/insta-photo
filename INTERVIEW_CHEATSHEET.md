# Technical Interview Cheat Sheet - Quick Reference

## 🎯 Your Elevator Pitch (30 sec)
*"I'm a full-stack developer who recently built an Instagram clone as my capstone project - complete with authentication, file uploads, likes, comments, and follows. I learned Node.js from scratch for this, but I work with TypeScript daily. I built it using Express, React, MySQL with Prisma, and deployed with proper architecture patterns. I'm comfortable with React and Node.js, currently learning MongoDB and AWS. I love moving fast and iterating - exactly how I built my project in [X weeks]."*

---

## 📊 MongoDB Quick Reference

### Document vs Relational
| MySQL | MongoDB |
|-------|---------|
| Tables → Rows | Collections → Documents |
| Fixed schema | Flexible schema |
| JOIN for relations | Embed or reference |
| ACID always | ACID in transactions |

### Embed vs Reference
```javascript
// Embed (1-to-few, read together)
{ userId, comments: [{text, date}] }

// Reference (1-to-many, separate)
{ userId }  // User doc
{ userId, text }  // Comment doc
```

### Key Operations
```javascript
// Create
await Post.create({userId, description});

// Find with populate (like JOIN)
await Post.find().populate('userId', 'username avatar');

// Update
await Post.findByIdAndUpdate(id, {$inc: {likes: 1}});

// Aggregation
db.posts.aggregate([
  { $match: { userId: "123" } },
  { $sort: { createdAt: -1 } },
  { $limit: 10 }
]);
```

---

## ☁️ AWS Services Quick Reference

| Service | What It Is | Your Use Case |
|---------|-----------|---------------|
| **EC2** | Virtual server | Run Express app |
| **S3** | File storage | Store uploaded images |
| **RDS** | Managed database | MySQL in cloud |
| **Lambda** | Serverless function | Image processing |
| **CloudWatch** | Logs & monitoring | Track errors, metrics |
| **IAM** | Security/permissions | Control who accesses what |

---

## 🔴 Redis Quick Reference

### When to Use
- ✅ Cache frequently-read data
- ✅ Session storage
- ✅ Rate limiting
- ✅ Real-time counters
- ✅ Leaderboards
- ❌ Primary data storage

### Common Operations
```javascript
// Cache
await redis.set('key', JSON.stringify(data));
await redis.get('key');
await redis.setEx('key', 300, data); // 5 min TTL

// Counter
await redis.incr('post:123:views');

// Set (unique items)
await redis.sAdd('post:123:likers', userId);
await redis.sIsMember('post:123:likers', userId);

// Sorted Set (leaderboard)
await redis.zAdd('trending', {score: 100, value: 'post123'});
await redis.zRange('trending', 0, 9, {REV: true}); // Top 10
```

---

## 🔥 Common Interview Questions

### "How do you scale to 1M users?"
```
1. Add Redis caching (10-100x speedup)
2. Add database indexes
3. CDN for images (CloudFront + S3)
4. Database read replicas
5. Horizontal scaling (multiple servers + load balancer)
6. Message queue for async tasks (Bull/SQS)
7. Microservices if needed
```

### "How do you optimize slow queries?"
```
1. Add indexes to queried columns
2. Use pagination (LIMIT/OFFSET)
3. Select only needed fields
4. Add Redis cache
5. Use database query EXPLAIN to analyze
6. Avoid N+1 queries (use JOINs/includes)
```

### "How do you ensure security?"
```
1. Authentication (JWT with httpOnly cookies)
2. Authorization (check ownership)
3. Input validation (Zod/express-validator)
4. Rate limiting (prevent spam)
5. HTTPS only
6. CORS whitelist
7. Helmet (security headers)
8. Never trust user input!
```

### "Embed vs Reference in MongoDB?"
```
Embed when:
- Data accessed together
- Bounded size
- 1-to-few relationship

Reference when:
- Data used independently
- Unbounded growth
- Many-to-many relationship
```

---

## ⚡ Node.js Essentials

### Event Loop Order
1. Sync code
2. process.nextTick()
3. Promises (microtasks)
4. setTimeout/setInterval
5. setImmediate()

### Error Handling
```javascript
// Async route
app.get('/posts', async (req, res, next) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (err) {
    next(err); // Pass to error middleware
  }
});

// Error middleware (4 params!)
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: err.message
  });
});
```

---

## ⚛️ React Essentials

### Performance Optimization
```javascript
// Prevent re-renders
const MemoComponent = React.memo(Component);

// Expensive calculation
const value = useMemo(() => expensiveCalc(), [deps]);

// Stable function reference
const onClick = useCallback(() => {}, [deps]);

// Code splitting
const Page = lazy(() => import('./Page'));
```

### When to Use
- **useState**: UI state, triggers re-render
- **useRef**: DOM refs, mutable values (no re-render)
- **useEffect**: Side effects, subscriptions
- **useMemo**: Expensive calculations
- **useCallback**: Stable function refs

---

## 🗄️ Database Essentials

### Indexing
```sql
-- Add indexes to:
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_post_user ON posts(user_id);
CREATE INDEX idx_post_date ON posts(created_at DESC);

-- Compound index
CREATE INDEX idx_user_date ON posts(user_id, created_at DESC);
```

### N+1 Problem
```javascript
// ❌ BAD: 1 + N queries
const posts = await Post.findAll();
for (const post of posts) {
  post.user = await User.findById(post.userId); // N queries!
}

// ✅ GOOD: 1 or 2 queries
const posts = await Post.findAll({
  include: [User] // JOIN
});
```

### Transaction
```javascript
const session = await mongoose.startSession();
await session.withTransaction(async () => {
  await Account.updateOne({id: A}, {$inc: {balance: -100}}, {session});
  await Account.updateOne({id: B}, {$inc: {balance: +100}}, {session});
});
```

---

## 🎯 System Design Patterns

### Cache-Aside Pattern
```
1. Check cache
2. If miss → get from DB
3. Store in cache
4. Return data
```

### Write-Through Cache
```
1. Write to DB
2. Immediately update cache
3. Return success
```

### Message Queue Pattern
```
API → Queue → Background Worker
- API responds instantly
- Worker processes async
- Automatic retry on failure
```

---

## 🔐 Security Essentials

### JWT Flow
```
1. User logs in → Server signs JWT
2. Client stores token
3. Client sends token in requests
4. Server verifies token
```

### Protection Layers
```
1. Authentication: Who are you? (JWT)
2. Authorization: What can you do? (check ownership)
3. Input validation: Is data safe? (sanitize)
4. Rate limiting: Prevent abuse
5. HTTPS: Encrypt in transit
```

---

## 🚀 What Makes You Stand Out

### Your Strengths
- ✅ Built real project (not just tutorials)
- ✅ Clean architecture (controller/service/data)
- ✅ Proved you learn fast (Node.js from scratch)
- ✅ TypeScript experience
- ✅ Shipped complete product

### What to Emphasize
- **Ownership**: "I decided to use Prisma because..."
- **Trade-offs**: "JWT scales better but can't revoke immediately"
- **Ship fast**: "I launched core features first, then iterated"
- **Learning**: "I don't know X yet, but here's how I'd learn it"
- **Product thinking**: "I chose this because users need..."

---

## 💬 Key Phrases to Use

✅ "I'd start simple, then scale as needed"
✅ "Let me clarify the requirements first..."
✅ "The trade-off here is X vs Y"
✅ "In production, I'd also consider..."
✅ "I haven't used X, but I understand it's similar to Y which I know"
✅ "I made this decision because..."
✅ "I'd measure first before optimizing"

❌ "I need perfect requirements before starting"
❌ "I can't do that, I don't know how"
❌ "That's not my responsibility"
❌ "I need my manager to approve this"

---

## 🎬 Interview Day Checklist

### Before
- [ ] Project running locally
- [ ] Know your code cold
- [ ] Test camera/mic/internet
- [ ] Have this cheat sheet open
- [ ] Glass of water nearby

### During
- [ ] Think out loud
- [ ] Ask clarifying questions
- [ ] Start simple, then scale
- [ ] Draw diagrams if helpful
- [ ] Admit gaps honestly

### Questions to Ask Them
1. "What's the hardest technical challenge you're facing?"
2. "How do you balance moving fast with quality?"
3. "What does real ownership look like here?"
4. "What would my first month be like?"

---

## 🆘 If You Get Stuck

1. **Take a breath** - It's okay to pause and think
2. **Ask questions** - "Can I clarify the requirements?"
3. **Start simple** - "Let me start with a basic solution..."
4. **Think out loud** - Show your thought process
5. **Admit uncertainty** - "I'm not sure, but I'd approach it by..."

Remember: They want to see HOW you think, not just the answer!

---

## 💪 Final Pep Talk

You have:
- ✅ Built a real, working product
- ✅ Required skills (React, Node.js, TypeScript)
- ✅ Proven ability to learn fast
- ✅ Clean code and good architecture

You need to learn:
- ⚠️ MongoDB (you can do this in 3 days)
- ⚠️ AWS basics (you can explore in a week)
- ⚠️ Redis (you can try it today)

**You're more ready than you think!** 🚀

MongoDB and AWS are just tools - your ability to learn, ship, and take ownership is what matters.

Go show them what you've built and how you think! 💪

---

*My favorite ice cream flavor is: ___________________*
*(Anything but "Vanilla JS" 😄)*
