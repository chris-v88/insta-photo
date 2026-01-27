# 7-Day Interview Prep Study Plan

## 📅 Day-by-Day Breakdown

> **Goal:** Go from "I only know MySQL" to "I understand MongoDB, AWS, and Redis well enough to discuss them confidently"

---

## Day 1: MongoDB Fundamentals (4-5 hours)

### Morning (2 hours)
- [ ] **Watch**: [MongoDB in 100 Seconds](https://www.youtube.com/watch?v=ofme2o29ngU)
- [ ] **Read**: [MongoDB vs MySQL](https://www.mongodb.com/compare/mongodb-mysql) (30 min)
- [ ] **Read**: Your prep guide MongoDB section (30 min)
- [ ] **Try**: https://mongoplayground.net/ - Run example queries (30 min)

### Afternoon (2-3 hours)
- [ ] **Do**: [MongoDB University M001](https://university.mongodb.com/) - Chapters 1-2
  - Documents and collections
  - CRUD operations
  - Query operators

### Evening (30 min)
- [ ] **Practice**: Write these queries on paper without looking:
  ```javascript
  // Find all posts by user
  // Create a post with embedded comments
  // Update like count
  // Delete a post
  ```

### ✅ End of Day 1 - You Should Know:
- Document-based storage concept
- How to create, read, update, delete documents
- Difference from MySQL (no JOINs, flexible schema)

---

## Day 2: MongoDB Advanced + Start AWS (4-5 hours)

### Morning (2 hours)
- [ ] **Do**: MongoDB University M001 - Chapters 3-4
  - Indexing
  - Aggregation pipeline basics
  - Embedding vs referencing

- [ ] **Practice**: Convert one feature from your insta-photo to MongoDB pseudocode
  ```javascript
  // Example: Convert "get post feed" to MongoDB
  db.posts.aggregate([
    { $sort: { createdAt: -1 } },
    { $limit: 20 },
    { $lookup: { from: 'users', ... } }
  ]);
  ```

### Afternoon (2 hours)
- [ ] **Create**: [AWS Free Tier Account](https://aws.amazon.com/free/)
- [ ] **Watch**: [AWS in 10 minutes](https://www.youtube.com/watch?v=JIbIYCM48to)
- [ ] **Explore**: AWS Console
  - Find EC2 (virtual servers)
  - Find S3 (storage)
  - Find RDS (databases)
  - Don't launch anything yet, just explore

### Evening (1 hour)
- [ ] **Read**: Your prep guide AWS section
- [ ] **Write**: In your own words, explain what each AWS service does

### ✅ End of Day 2 - You Should Know:
- MongoDB aggregation pipeline
- When to embed vs reference
- What each major AWS service is for

---

## Day 3: AWS Hands-On + Redis Intro (5-6 hours)

### Morning (3 hours)
- [ ] **Launch**: EC2 instance (t2.micro - free tier)
  - Ubuntu 22.04
  - Allow ports 22, 80, 3000
  - Connect via SSH
  
- [ ] **Deploy**: Your insta-photo backend to EC2
  ```bash
  ssh -i mykey.pem ubuntu@ec2-xx-xx-xx-xx.compute.amazonaws.com
  sudo apt update
  sudo apt install nodejs npm
  git clone your-repo
  cd backend
  npm install
  npm start
  ```

### Afternoon (2 hours)
- [ ] **Install**: Redis locally
  ```bash
  # In your dev container
  sudo apt install redis-server -y
  sudo systemctl start redis
  redis-cli ping  # Should return PONG
  ```

- [ ] **Try**: Redis commands in redis-cli
  ```bash
  SET user:1:name "John"
  GET user:1:name
  INCR post:1:views
  EXPIRE user:1:name 300
  ```

### Evening (1 hour)
- [ ] **Read**: Your prep guide Redis section
- [ ] **Watch**: [Redis in 100 seconds](https://www.youtube.com/watch?v=G1rOthIU-uo)

### ✅ End of Day 3 - You Should Know:
- How to deploy Node.js to EC2
- Basic Redis commands
- Why Redis is useful (caching, speed)

---

## Day 4: Redis Hands-On + System Design (4-5 hours)

### Morning (2 hours)
- [ ] **Implement**: Add Redis caching to your insta-photo
  - Use the code from prep guide
  - Cache the feed endpoint
  - Test cache hit/miss
  - Invalidate on post creation

- [ ] **Measure**: Time difference
  ```javascript
  console.time('query');
  const posts = await getPosts();
  console.timeEnd('query');
  // Without cache: ~150ms
  // With cache: ~5ms
  ```

### Afternoon (2 hours)
- [ ] **Read**: [System Design Primer](https://github.com/donnemartin/system-design-primer) - Intro
- [ ] **Practice**: Draw your insta-photo architecture
  ```
  [Client] → [Load Balancer] → [API Servers]
                                      ↓
                           [Redis Cache] [MySQL]
                                      ↓
                                  [S3/Cloudinary]
  ```

- [ ] **Think**: How would you scale to 1M users?
  - Write your answer
  - Compare with prep guide

### Evening (1 hour)
- [ ] **Watch**: [System Design Interview videos](https://www.youtube.com/c/SystemDesignInterview)
  - Pick 2-3 relevant ones (Instagram, Twitter, etc.)

### ✅ End of Day 4 - You Should Know:
- How to implement Redis caching
- Basic system design patterns
- How to think about scale

---

## Day 5: Mock Interview + Code Review (4-5 hours)

### Morning (2 hours)
- [ ] **Review**: Your insta-photo codebase
  - Read through every file
  - Understand every decision
  - Note 3-5 things you'd improve

- [ ] **Practice**: Explain architecture out loud
  - Record yourself
  - Aim for 5-minute explanation
  - Should sound natural, not rehearsed

### Afternoon (2 hours)
- [ ] **Do**: Live coding practice
  - Time yourself: 30 minutes
  - Implement from prep guide: "Add view count feature"
  - Think out loud while coding
  - Explain trade-offs

- [ ] **Review**: Common interview scenarios from prep guide
  - Read each one
  - Practice answering out loud
  - Note any gaps

### Evening (1 hour)
- [ ] **Study**: Quick-fire questions from prep guide
  - Cover up answers
  - Try to answer each
  - Mark ones you're weak on

### ✅ End of Day 5 - You Should Know:
- Your project inside and out
- How to explain your decisions
- How to approach live coding

---

## Day 6: AWS Deep Dive + Practice (4-5 hours)

### Morning (2 hours)
- [ ] **Implement**: S3 upload in your project (optional but impressive)
  ```javascript
  // Replace one Cloudinary upload with S3
  // Follow prep guide code
  ```

- [ ] **Setup**: CloudWatch for your EC2
  - View CPU metrics
  - Set up simple alarm
  - Check logs

### Afternoon (2 hours)
- [ ] **Practice**: System design questions
  - Design notification system
  - Design chat application  
  - Design URL shortener
  - Use framework from prep guide

### Evening (1 hour)
- [ ] **Study**: Quick-fire AWS questions
  - What's EC2? S3? RDS? Lambda?
  - When would you use each?
  - Practice answering quickly

### ✅ End of Day 6 - You Should Know:
- How to use AWS S3 and CloudWatch
- How to approach system design questions
- AWS services and when to use them

---

## Day 7: Final Review + Confidence Building (3-4 hours)

### Morning (2 hours)
- [ ] **Mock Interview**: Find a friend or use Pramp
  - Full technical interview
  - Get feedback
  - Note areas to improve

- [ ] **Review**: All your weak points
  - Revisit prep guide sections you struggled with
  - Practice those topics again

### Afternoon (1 hour)
- [ ] **Prepare**: Day-of checklist
  - Test camera/mic/internet
  - Have project running locally
  - Print cheat sheet
  - Prepare questions for them

### Evening (1 hour)
- [ ] **Mental Prep**: Read confidence builders section
- [ ] **Relax**: You've done the work!
  - Light review only
  - Get good sleep
  - Trust your preparation

### ✅ End of Day 7 - You're Ready! 🚀

---

## 🎯 If You Have Less Time

### 3-Day Crash Course

**Day 1: MongoDB (5 hours)**
- MongoDB basics + M001 Chapters 1-3
- Practice queries

**Day 2: AWS + Redis (5 hours)**
- Create AWS account, explore console
- Install Redis, try commands
- Read prep guide thoroughly

**Day 3: Practice (5 hours)**
- Review your code
- Practice explaining architecture
- Mock interview
- Study quick-fire questions

### 1-Day Emergency Prep

**Morning (3 hours)**
- [ ] Read prep guide MongoDB section (1 hour)
- [ ] Read prep guide AWS section (1 hour)
- [ ] Read prep guide Redis section (30 min)
- [ ] Review quick-fire questions (30 min)

**Afternoon (2 hours)**
- [ ] Review your insta-photo code (1 hour)
- [ ] Practice explaining your project (30 min)
- [ ] Print cheat sheet, prepare questions (30 min)

**Evening**
- [ ] Light review of cheat sheet
- [ ] Get good sleep!

---

## 📊 Progress Tracker

Track your daily progress:

```
Day 1: MongoDB Fundamentals          [ ]
Day 2: MongoDB Advanced + AWS Intro  [ ]
Day 3: AWS Hands-On + Redis Intro    [ ]
Day 4: Redis Hands-On + System       [ ]
Day 5: Mock Interview + Review       [ ]
Day 6: AWS Deep Dive + Practice      [ ]
Day 7: Final Review + Confidence     [ ]
```

---

## 💡 Study Tips

### Effective Learning
1. **Active > Passive**: Type code, don't just read
2. **Explain out loud**: If you can teach it, you know it
3. **Test yourself**: Cover answers, try to recall
4. **Focus on concepts**: Understand WHY, not just HOW
5. **Take breaks**: Pomodoro technique (25 min work, 5 min break)

### What NOT to Do
❌ Try to memorize everything
❌ Study for 8 hours straight
❌ Learn entire MongoDB/AWS in detail
❌ Panic about gaps

### What TO Do
✅ Understand core concepts
✅ Practice explaining things
✅ Connect to your project
✅ Build confidence through hands-on

---

## 🆘 If You Feel Overwhelmed

**Remember:**
- You don't need to be an expert in MongoDB/AWS
- You need to show you can LEARN and THINK
- Your capstone project proves you can ship
- Honesty about gaps is better than faking knowledge

**They're looking for:**
- Can you learn quickly? ✅ (You learned Node.js!)
- Can you ship code? ✅ (You built insta-photo!)
- Can you think through problems? ✅ (Practice this!)
- Are you honest and self-aware? ✅ (Just be yourself!)

---

## 🎯 Daily Goals Summary

- **Day 1**: Understand MongoDB basics
- **Day 2**: MongoDB advanced + AWS overview
- **Day 3**: Deploy to AWS + try Redis
- **Day 4**: Redis caching + system design
- **Day 5**: Mock interview + review
- **Day 6**: AWS deep dive + practice
- **Day 7**: Final prep + confidence

---

## ✅ You're Ready When You Can:

- [ ] Explain document-based vs relational databases
- [ ] Write basic MongoDB queries
- [ ] Explain when to embed vs reference
- [ ] Describe what EC2, S3, RDS, Lambda do
- [ ] Explain Redis use cases (cache, sessions, counters)
- [ ] Walk through your insta-photo architecture
- [ ] Discuss how you'd scale to 1M users
- [ ] Explain trade-offs in your technical decisions
- [ ] Code a simple feature live (with thinking out loud)
- [ ] Ask intelligent questions about their tech stack

---

## 🚀 Final Thought

**You've built a full-stack Instagram clone from scratch while learning Node.js.**

That's harder than learning MongoDB, AWS, or Redis.

If you can do that, you can pass this interview! 💪

Now go prepare, stay confident, and show them what you've got! 🎯

---

*"I'd rather hire someone who can learn fast than someone who knows everything but can't adapt."*
- Every good engineering manager
