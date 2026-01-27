# Jiga Technical Interview Preparation Guide

## 📊 Your Current Strengths (Based on insta-photo project)

### ✅ What You've Done Well

1. **Full-Stack Architecture**
   - Clean separation: Backend (Express/Node.js) + Frontend (React/TypeScript)
   - RESTful API design with proper routing structure
   - Authentication & authorization middleware
   - File uploads with Cloudinary integration

2. **Backend Skills**
   - Express.js server setup with proper middleware chain
   - JWT authentication (access + refresh tokens)
   - Error handling with custom error classes
   - Service layer pattern (controller → service → database)
   - Prisma ORM for database operations
   - Cookie-based auth + Bearer tokens

3. **Frontend Skills**
   - React with TypeScript
   - State management with Zustand
   - React Query for data fetching
   - Protected routes implementation
   - Form handling and validation (Zod schemas)
   - Proper TypeScript types and interfaces

4. **Database Skills**
   - MySQL with Prisma ORM
   - Schema design (Users, Posts, Comments, Likes, Follows)
   - Relations and foreign keys
   - Database migrations

5. **Code Quality**
   - Consistent code structure
   - Separation of concerns
   - ESLint and Prettier setup
   - Environment variables for configuration

---

## 🎯 What Jiga is Looking For

### Must-Have Skills
- ✅ React (you have this)
- ✅ Node.js (you have this)
- ⚠️ MongoDB (you need to learn this - you only know MySQL)
- ⚠️ AWS services (you need experience here)
- ⚠️ Terraform (nice to have - you don't have this)

### Key Values They Care About
1. **Simple > Complicated** - Your code is pretty clean, good!
2. **Ship it, then improve it** - Be ready to discuss rapid iteration
3. **Product > Engineering** - Focus on business value, not clever code
4. **Full ownership** - Show you can make decisions independently
5. **Fast shipping** - Demonstrate you can move quickly

---

## 📚 Technical Gaps to Address

### 1. MongoDB (CRITICAL - You Only Know MySQL)

**Key Differences from MySQL:**

```javascript
// MySQL (Relational) with Prisma - What you know
await prisma.posts.create({
  data: {
    user_id: user.id,
    description: description,
    image_url: uploadResult.secure_url,
  },
  include: {
    Users: {
      select: { id: true, username: true }
    }
  }
});

// MongoDB (Document-based) - What you need to learn
// Using Mongoose (common MongoDB ODM)
await Post.create({
  userId: user.id,  // No foreign key constraints
  description: description,
  imageUrl: uploadResult.secure_url,
  likes: [],  // Can embed arrays directly
  comments: []  // Can embed subdocuments
});

// Or using native MongoDB driver
await db.collection('posts').insertOne({
  userId: new ObjectId(user.id),
  description: description,
  imageUrl: uploadResult.secure_url,
  createdAt: new Date()
});
```

**Study Topics:**

#### Document-based vs Relational Databases

**If they ask:** "What's the difference between MongoDB and MySQL?"

**Your answer:**
```
MySQL (Relational):
- Data in tables with rows and columns
- Fixed schema (must define columns first)
- Relations via foreign keys
- ACID transactions across tables
- Great for: structured data, complex joins, financial systems

MongoDB (Document):
- Data in collections of JSON-like documents
- Flexible schema (each document can be different)
- Relations via references or embedding
- ACID transactions within documents (and across with sessions)
- Great for: flexible data, rapid iteration, hierarchical data

Example from my project:
In MySQL, a post with comments requires 2 tables + JOIN:
  Posts(id, user_id, description)
  Comments(id, post_id, user_id, content)
  
In MongoDB, you can embed or reference:
  Post { _id, userId, description, comments: [...] }  // Embedded
  or
  Post { _id, userId, description }  // Referenced
  Comment { _id, postId, userId, content }
```

#### Embedding vs Referencing Documents

**If they ask:** "When would you embed vs reference in MongoDB?"

**Your answer:**
```javascript
// EMBEDDING (1-to-few, data read together)
// Good for: Comments that are always loaded with posts
{
  _id: ObjectId("..."),
  description: "Beautiful sunset",
  userId: ObjectId("..."),
  comments: [  // Embedded array
    { userId: ObjectId("..."), content: "Nice!", createdAt: Date },
    { userId: ObjectId("..."), content: "Love it", createdAt: Date }
  ],
  likes: [ObjectId("user1"), ObjectId("user2")]  // Array of refs
}

// REFERENCING (1-to-many, independent lifecycle)
// Good for: Users who can exist without posts
// Post document
{
  _id: ObjectId("post1"),
  description: "Beautiful sunset",
  userId: ObjectId("user1")  // Reference to User
}

// User document (separate collection)
{
  _id: ObjectId("user1"),
  username: "john_doe",
  email: "john@example.com"
}

Decision framework:
- Embed when: Data accessed together, bounded size (< 16MB), 1-to-few
- Reference when: Data used independently, unbounded growth, 1-to-many/many-to-many

In my insta-photo:
- Embed: Small comments (first 3) in post for fast display
- Reference: Users (needed everywhere), all posts by user
```

#### MongoDB Aggregation Pipeline

**If they ask:** "How would you get top 10 users with most followers?"

**Your answer:**
```javascript
// Aggregation = multi-stage data processing pipeline
// Like: SQL SELECT with GROUP BY, ORDER BY, LIMIT

db.users.aggregate([
  // Stage 1: Lookup followers from Follows collection
  {
    $lookup: {
      from: "follows",
      localField: "_id",
      foreignField: "followingId",
      as: "followers"
    }
  },
  // Stage 2: Add computed field
  {
    $addFields: {
      followerCount: { $size: "$followers" }
    }
  },
  // Stage 3: Sort by follower count
  { $sort: { followerCount: -1 } },
  
  // Stage 4: Limit to top 10
  { $limit: 10 },
  
  // Stage 5: Project only needed fields
  {
    $project: {
      username: 1,
      followerCount: 1,
      avatar: 1
    }
  }
]);

// Real-world use in my insta-photo:
// "Get posts feed with like counts and user info"
db.posts.aggregate([
  { $sort: { createdAt: -1 } },
  { $limit: 20 },
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  { $unwind: "$user" },
  {
    $addFields: {
      likeCount: { $size: "$likes" }
    }
  }
]);
```

#### Indexing in MongoDB

**If they ask:** "How would you optimize slow queries?"

**Your answer:**
```javascript
// Without index: MongoDB scans every document (slow!)
// With index: MongoDB uses B-tree for fast lookups

// Create indexes on frequently queried fields
db.posts.createIndex({ userId: 1 });  // 1 = ascending
db.posts.createIndex({ createdAt: -1 });  // -1 = descending
db.users.createIndex({ username: 1 }, { unique: true });
db.users.createIndex({ email: 1 }, { unique: true });

// Compound index (multiple fields)
db.posts.createIndex({ userId: 1, createdAt: -1 });
// Good for: "Get user's posts sorted by date"

// Text index for search
db.posts.createIndex({ description: "text" });
db.users.createIndex({ username: "text" });

// In my insta-photo, I'd index:
// - users.username (unique, login lookups)
// - users.email (unique, login lookups)
// - posts.userId (get user's posts)
// - posts.createdAt (sort feed by date)
// - follows.followerId + followingId (compound, check if following)
// - comments.postId (get post's comments)

// Check query performance
db.posts.find({ userId: "..." }).explain("executionStats");
// Look for: "IXSCAN" (good) vs "COLLSCAN" (bad)
```

#### Mongoose ODM Basics

**If they ask:** "How do you model data with Mongoose?"

**Your answer:**
```javascript
// Mongoose = MongoDB ODM (like Prisma for MongoDB)
// Provides schemas, validation, type casting

// 1. Define Schema
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    maxlength: 2200
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to User model
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true  // Auto adds createdAt, updatedAt
});

// 2. Create Model
const Post = mongoose.model('Post', postSchema);

// 3. Use Model
// Create
const newPost = await Post.create({
  description: "Beautiful sunset",
  imageUrl: "https://...",
  userId: req.user.id
});

// Find with population (like JOIN)
const posts = await Post.find()
  .populate('userId', 'username avatar')  // Load user data
  .sort({ createdAt: -1 })
  .limit(10);

// Update
await Post.findByIdAndUpdate(postId, {
  $push: { likes: userId }  // Add to array
});

// Delete
await Post.findByIdAndDelete(postId);

// In my insta-photo conversion:
// - Replace Prisma models with Mongoose schemas
// - Replace prisma.posts.create() with Post.create()
// - Replace include: { Users } with .populate('userId')
```

#### MongoDB Transactions

**If they ask:** "How do you ensure data consistency in MongoDB?"

**Your answer:**
```javascript
// Transactions = Multiple operations succeed or all fail together
// Like SQL BEGIN TRANSACTION / COMMIT / ROLLBACK

// Example: User creates post + update user's post count
const session = await mongoose.startSession();
session.startTransaction();

try {
  // Operation 1: Create post
  const post = await Post.create([{
    description: req.body.description,
    imageUrl: uploadResult.url,
    userId: req.user.id
  }], { session });  // Pass session!
  
  // Operation 2: Increment user's post count
  await User.findByIdAndUpdate(
    req.user.id,
    { $inc: { postCount: 1 } },
    { session }  // Pass session!
  );
  
  // Both succeeded, commit
  await session.commitTransaction();
  return post[0];
  
} catch (error) {
  // Something failed, rollback both
  await session.abortTransaction();
  throw error;
  
} finally {
  session.endSession();
}

// When to use transactions:
// - Financial operations (transfer money)
// - Multi-document updates that must be atomic
// - Critical data consistency (inventory, bookings)

// When NOT to use:
// - Single document updates (already atomic)
// - Performance-critical operations (transactions have overhead)
// - Simple CRUD where eventual consistency is OK

// In my insta-photo:
// - Maybe for: Delete user + all their posts/comments/likes
// - Probably not needed for: Like a post (single doc update)
```

**Quick Learning Path (3-5 days):**
1. Read MongoDB docs: https://www.mongodb.com/docs/manual/
2. Complete MongoDB University free course (M001)
3. Convert one feature from your insta-photo to MongoDB
4. Practice aggregation queries

### 2. AWS Services (IMPORTANT)

#### EC2 (Elastic Compute Cloud)

**What it is:** Virtual servers in the cloud

**If they ask:** "How would you deploy your Node.js app to AWS?"

**Your answer:**
```
1. Launch EC2 instance:
   - Choose Ubuntu 22.04 LTS
   - t2.micro (free tier)
   - Configure security group (allow port 22, 80, 443, 3069)

2. Connect via SSH:
   ssh -i mykey.pem ubuntu@ec2-xx-xx-xx-xx.compute.amazonaws.com

3. Setup server:
   sudo apt update
   sudo apt install nodejs npm nginx
   git clone my-repo
   cd my-repo
   npm install
   
4. Run with PM2 (process manager):
   npm install -g pm2
   pm2 start server.js
   pm2 startup  # Auto-restart on reboot
   pm2 save

5. Setup Nginx as reverse proxy:
   # Forward port 80 to 3069
   
When to use:
- Need full control over server
- Long-running processes
- Custom software/dependencies

In my insta-photo:
- Run Express server on EC2
- Use PM2 to keep it running
- Nginx for SSL and load balancing
```

#### S3 (Simple Storage Service)

**What it is:** Object storage (like Dropbox for files)

**If they ask:** "How would you handle file uploads to S3?"

**Your answer:**
```javascript
// Replace Cloudinary with S3
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'us-east-1'
});

// Upload file
const uploadToS3 = async (file) => {
  const params = {
    Bucket: 'insta-photo-uploads',
    Key: `posts/${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read'  // Or use CloudFront for CDN
  };
  
  const result = await s3.upload(params).promise();
  return result.Location;  // URL to file
};

// In controller
const imageUrl = await uploadToS3(req.file);
await prisma.posts.create({
  data: { imageUrl, ... }
});

Benefits vs Cloudinary:
- Cheaper at scale
- More control
- Integration with other AWS services

Trade-offs:
- You manage image optimization (use Sharp library)
- You handle CDN setup (CloudFront)
- More code to write

When to use:
- Large files (videos, backups)
- Static assets for website
- User uploads
- Data archival
```

#### RDS (Relational Database Service)

**What it is:** Managed MySQL/PostgreSQL database

**If they ask:** "Why use RDS instead of database on EC2?"

**Your answer:**
```
RDS = AWS manages the database for you

Benefits:
✅ Automated backups (point-in-time recovery)
✅ Automated patches and updates
✅ Easy replication (read replicas)
✅ Automatic failover (Multi-AZ)
✅ Monitoring built-in
✅ Easy scaling (vertical: bigger instance, horizontal: read replicas)

Setup:
1. Create RDS MySQL instance
2. Configure security group (allow EC2 to connect)
3. Get endpoint: mydb.abc123.us-east-1.rds.amazonaws.com:3306
4. Update .env:
   DATABASE_URL="mysql://user:pass@mydb.abc123.../dbname"
5. Run migrations: npx prisma migrate deploy

For my insta-photo:
- Use RDS for production database
- Enable automated backups (7-day retention)
- Create read replica for analytics queries
- Don't impact main DB performance

Cost:
- Free tier: db.t2.micro with 20GB storage
- Production: $50-500/month depending on size
```

#### Lambda (Serverless Functions)

**What it is:** Run code without managing servers

**If they ask:** "When would you use Lambda vs EC2?"

**Your answer:**
```javascript
Lambda = Functions that run on-demand

// Example: Resize image after upload
exports.handler = async (event) => {
  // Triggered when file uploaded to S3
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  
  // Download from S3
  const file = await s3.getObject({ Bucket: bucket, Key: key }).promise();
  
  // Resize with Sharp
  const resized = await sharp(file.Body)
    .resize(800, 800, { fit: 'inside' })
    .jpeg({ quality: 80 })
    .toBuffer();
  
  // Upload resized version
  await s3.putObject({
    Bucket: bucket,
    Key: `resized/${key}`,
    Body: resized
  }).promise();
};

Use Lambda for:
✅ Event-driven tasks (S3 upload → process)
✅ Scheduled jobs (cron)
✅ Sporadic traffic (cost-effective)
✅ Microservices
✅ API endpoints with API Gateway

Use EC2 for:
✅ Long-running processes
✅ WebSocket connections
✅ Consistent high traffic
✅ Complex dependencies

In my insta-photo:
- Lambda: Image resizing, thumbnail generation
- Lambda: Send email notifications (batch)
- Lambda: Cleanup old sessions (scheduled)
- EC2: Main API server (always running)
```

#### API Gateway

**What it is:** Managed API layer (REST/WebSocket)

**If they ask:** "How does API Gateway work with Lambda?"

**Your answer:**
```
API Gateway = Front door for your APIs

Traditional:
Client → EC2 (Express server)

Serverless:
Client → API Gateway → Lambda → Database

Setup:
1. Create REST API in API Gateway
2. Define routes: GET /posts, POST /posts, etc.
3. Connect each route to Lambda function
4. Deploy to stage (dev, prod)
5. Get URL: https://abc123.execute-api.us-east-1.amazonaws.com/prod

Benefits:
- Auto-scaling
- Rate limiting
- API keys
- CORS handling
- Request/response transformation
- Caching

Example for my insta-photo:
GET /posts → Lambda (getPosts) → RDS
POST /posts → Lambda (createPost) → S3 + RDS
GET /posts/:id → Lambda (getPost) → RDS

Cost:
- First 1M requests/month: free
- After: $3.50 per million requests

When to use:
- Serverless architecture
- Need rate limiting/throttling
- API versioning
- Microservices architecture
```

#### CloudWatch

**What it is:** Monitoring and logging

**If they ask:** "How do you monitor your application in production?"

**Your answer:**
```javascript
CloudWatch = AWS's monitoring and logging service

1. Logs:
// In Node.js, logs automatically go to CloudWatch
console.log('User logged in:', userId);
console.error('Error creating post:', error);

// View in CloudWatch Logs Console
// - Filter by time range
// - Search for errors
// - Set up alerts

2. Metrics:
// Automatic metrics:
- CPU utilization
- Memory usage
- Network traffic
- Disk I/O

// Custom metrics:
const AWS = require('aws-sdk');
const cloudwatch = new AWS.CloudWatch();

await cloudwatch.putMetricData({
  Namespace: 'InstaPhoto',
  MetricData: [{
    MetricName: 'PostsCreated',
    Value: 1,
    Unit: 'Count',
    Timestamp: new Date()
  }]
}).promise();

3. Alarms:
// Alert when things go wrong
- CPU > 80% for 5 minutes → send SNS notification
- Error rate > 5% → page on-call engineer
- Disk space < 10% → auto-scale or alert

4. Dashboards:
// Visual monitoring
- Request count over time
- Response times (p50, p95, p99)
- Error rates
- Active users

For my insta-photo:
- Log all errors to CloudWatch
- Track: posts/sec, likes/sec, active users
- Alert on: error rate spike, high latency
- Dashboard: Real-time metrics

Cost:
- 5GB logs/month: free
- Custom metrics: $0.30 per metric/month
```

#### IAM (Identity and Access Management)

**What it is:** Security and permissions

**If they ask:** "How do you secure AWS resources?"

**Your answer:**
```
IAM = Who can do what in AWS

Key concepts:

1. Users: Individual people
2. Groups: Collection of users (Developers, Admins)
3. Roles: Permissions for AWS services
4. Policies: JSON documents defining permissions

Example policy:
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:PutObject"
    ],
    "Resource": "arn:aws:s3:::insta-photo-uploads/*"
  }]
}

Best practices:

1. Never use root account (use IAM users)
2. Enable MFA (multi-factor auth)
3. Principle of least privilege:
   - Lambda only gets S3 permissions it needs
   - EC2 only gets RDS permissions it needs
   
4. Use roles, not access keys in code:

// BAD: Hardcoded credentials
const s3 = new AWS.S3({
  accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
});

// GOOD: Use IAM role attached to EC2/Lambda
const s3 = new AWS.S3();  // Automatically uses role

For my insta-photo:
- Create role for EC2: Can read/write S3, connect to RDS
- Create role for Lambda: Can read S3, write CloudWatch logs
- Developers: Can deploy code, view logs (not delete DB)
- Never commit AWS keys to Git!
```

**Your Current Setup → AWS Equivalent:**
```javascript
// What you have now:
// - Local Node.js server → AWS EC2 or Lambda
// - Cloudinary for images → AWS S3 + CloudFront CDN
// - MySQL database → AWS RDS MySQL
// - Manual server management → AWS Elastic Beanstalk or ECS
// - Console.log debugging → CloudWatch Logs
// - No monitoring → CloudWatch Metrics + Alarms
```

**Quick Learning Path (1 week):**
1. Create free AWS account
2. Deploy your Node.js app to EC2
3. Move image uploads from Cloudinary to S3
4. Set up RDS MySQL and migrate your database
5. Learn basic CloudWatch for logs

### 3. System Design & Scalability

**Prepare to discuss:**
- How would you scale your insta-photo to 1M users?
- Caching strategies (Redis)
- Database optimization (indexing, query optimization)
- Load balancing
- CDN for static assets

**Example Answer Structure:**
```
Current: Single server + MySQL
↓
1. Add Redis for session storage and caching
2. Move images to CDN (S3 + CloudFront)
3. Database: Read replicas for posts/comments
4. Horizontal scaling: Multiple Node.js instances behind load balancer
5. Queue system (SQS/Bull) for async tasks (email, notifications)
```

### 4. Redis (CRITICAL - You Don't Know This)

**What it is:** In-memory data store (cache, session store, message broker)

**If they ask:** "How would you improve performance of your feed?"

**Your answer:**
```javascript
// Redis = Super-fast in-memory database
// Think: JavaScript object that persists and multiple servers can share

// 1. CACHING - Store frequently accessed data
const redis = require('redis');
const client = redis.createClient();

// Before: Every request hits database
app.get('/posts', async (req, res) => {
  const posts = await prisma.posts.findMany({ take: 20 });
  res.json(posts);
});

// After: Cache in Redis (1000x faster!)
app.get('/posts', async (req, res) => {
  // Check cache first
  const cached = await client.get('posts:feed');
  if (cached) {
    return res.json(JSON.parse(cached));
  }
  
  // Cache miss - get from database
  const posts = await prisma.posts.findMany({ take: 20 });
  
  // Store in cache for 5 minutes
  await client.setEx('posts:feed', 300, JSON.stringify(posts));
  
  res.json(posts);
});

// 2. SESSION STORAGE
// Instead of JWT, store sessions in Redis
await client.set(`session:${sessionId}`, JSON.stringify({
  userId: user.id,
  lastActive: Date.now()
}), { EX: 86400 });  // Expire in 24 hours

// 3. COUNTERS (fast increments)
// Post likes counter
await client.incr(`post:${postId}:likes`);
await client.get(`post:${postId}:likes`);  // Get current count

// 4. RATE LIMITING
const rateLimit = async (userId) => {
  const key = `ratelimit:${userId}`;
  const count = await client.incr(key);
  
  if (count === 1) {
    await client.expire(key, 60);  // Reset after 60 seconds
  }
  
  if (count > 100) {
    throw new Error('Rate limit exceeded');
  }
};

// 5. REAL-TIME FEATURES
// Online users
await client.sAdd('users:online', userId);
await client.sCard('users:online');  // Count online users

// 6. LEADERBOARDS (sorted sets)
// Top posts by likes
await client.zAdd('posts:trending', {
  score: likeCount,
  value: postId
});
const topPosts = await client.zRange('posts:trending', 0, 9, { REV: true });

// 7. PUB/SUB (real-time notifications)
// Publisher
await client.publish('notifications', JSON.stringify({
  userId: targetUserId,
  message: 'Someone liked your post'
}));

// Subscriber
await client.subscribe('notifications', (message) => {
  const data = JSON.parse(message);
  // Send to user via WebSocket
  io.to(data.userId).emit('notification', data);
});
```

**Common Interview Questions:**

**Q: "What would you cache in your insta-photo app?"**
```
A: 
1. Homepage feed (posts list) - 5 min TTL
2. User profile data - 10 min TTL
3. Post like counts - 1 min TTL
4. Trending posts - 15 min TTL
5. User session data - until logout
6. Rate limit counters - 1 min TTL

Why cache?
- Database queries are slow (10-100ms)
- Redis is fast (<1ms)
- Reduce database load
- Better user experience

Cache invalidation (hardest problem in CS!):
- Time-based: Expire after X seconds
- Event-based: Clear when data changes
- Write-through: Update cache when updating DB
```

**Q: "Redis vs Database - when to use which?"**
```
A:
Use Redis for:
✅ Temporary data (sessions, cache)
✅ Fast reads (counters, leaderboards)
✅ Real-time features (pub/sub)
✅ Rate limiting
✅ Data that can be lost (it's in RAM!)

Use Database for:
✅ Permanent data (users, posts)
✅ Complex queries (joins, filters)
✅ Data integrity (ACID transactions)
✅ Cannot lose data
✅ Data > available RAM

Pattern: Database as source of truth, Redis as speed layer
```

**Q: "How do you handle cache invalidation?"**
```javascript
// Strategy 1: Time-based expiration (simple)
await client.setEx('posts:feed', 300, data);  // 5 minutes

// Strategy 2: Invalidate on write (accurate)
const createPost = async (postData) => {
  // Create in database
  const post = await prisma.posts.create({ data: postData });
  
  // Invalidate relevant caches
  await client.del('posts:feed');
  await client.del(`user:${postData.userId}:posts`);
  
  return post;
};

// Strategy 3: Write-through cache (fast + accurate)
const createPost = async (postData) => {
  const post = await prisma.posts.create({ data: postData });
  
  // Update cache immediately
  const feed = await client.get('posts:feed');
  if (feed) {
    const posts = JSON.parse(feed);
    posts.unshift(post);  // Add to beginning
    await client.setEx('posts:feed', 300, JSON.stringify(posts));
  }
  
  return post;
};

// Strategy 4: Cache aside (most common)
// Try cache → miss → load from DB → populate cache
```

**Redis Data Types You Should Know:**

```javascript
// 1. String (most common)
await client.set('user:1:name', 'John');
await client.get('user:1:name');

// 2. Hash (for objects)
await client.hSet('user:1', {
  name: 'John',
  email: 'john@example.com',
  age: 30
});
await client.hGetAll('user:1');

// 3. List (ordered)
await client.lPush('notifications', 'New like');
await client.lRange('notifications', 0, 9);  // Get first 10

// 4. Set (unique items)
await client.sAdd('post:1:likers', 'user1', 'user2');
await client.sIsMember('post:1:likers', 'user1');  // Check if liked

// 5. Sorted Set (leaderboard)
await client.zAdd('leaderboard', { score: 100, value: 'user1' });
await client.zRange('leaderboard', 0, 9, { REV: true });  // Top 10
```

---

## 💡 How to Position Your Experience

### Transform Your Capstone Project Into Wins

**Instead of:** "I built this for my capstone project"

**Say:** "I built a full-stack Instagram clone with:
- JWT authentication with refresh token rotation for security
- Real-time features ready (I see socket.io in your package.json!)
- Cloudinary CDN integration for optimized image delivery
- Clean architecture: controllers → services → data layer
- TypeScript on frontend for type safety
- Shipped it in [X weeks] while learning Node.js from scratch"

### Talk About Trade-offs (They Value This!)

Be ready to discuss decisions you made:

1. **Why Prisma over raw SQL?**
   - Type safety, migrations, easier to maintain
   - But: Some complex queries harder, another dependency

2. **Why JWT over sessions?**
   - Stateless, scales better
   - But: Can't immediately revoke, larger payload

3. **Why service layer pattern?**
   - Separation of concerns, testable
   - But: More files, more abstraction

4. **Why MySQL over MongoDB?**
   - ACID compliance, relations are first-class
   - But: Harder to scale horizontally, rigid schema

---

## 🔥 Technical Interview Scenarios

### Scenario 1: Live Coding - Build a Feature

**Likely Ask:** "Add a feature to track post view counts"

**Your Approach:**
```javascript
// 1. Database first (show you think about data model)
// In schema.prisma
model Posts {
  // ...existing fields
  view_count Int @default(0)
  last_viewed_at DateTime?
}

// 2. Service layer
export const postService = {
  incrementViewCount: async (postId, userId) => {
    // Prevent counting same user multiple times
    // Could use Redis for this in production
    return await prisma.posts.update({
      where: { id: postId },
      data: { 
        view_count: { increment: 1 },
        last_viewed_at: new Date()
      }
    });
  }
};

// 3. Controller
export const postController = {
  recordView: async (req, res, next) => {
    const result = await postService.incrementViewCount(
      req.params.id, 
      req.user?.id
    );
    const response = responseSuccess(result, 'View recorded');
    res.status(response.statusCode).json(response);
  }
};

// 4. Talk about improvements
// "In production, I'd use Redis to:
// - Cache view counts (update DB in batches)
// - Track unique viewers per post
// - Reduce database load"
```

### Scenario 2: System Design

**Question:** "Design a notification system for 100k users"

**Your Answer Framework:**
```
1. Requirements Clarification:
   - Real-time or async?
   - Types: likes, comments, follows?
   - Delivery: in-app, email, push?

2. Simple First (MVP):
   - Database table: Notifications(id, user_id, type, content, read)
   - API endpoint: GET /notifications
   - Poll every 30s or use WebSocket (you have socket.io!)

3. Scale It:
   - Queue system (Bull/SQS) for async delivery
   - Redis for unread counts (fast reads)
   - Fan-out pattern for followers (user posts → notify all followers)
   - Batch notifications (group similar ones)

4. Trade-offs:
   - Real-time vs resource usage
   - Notification fatigue vs engagement
   - Storage costs vs history retention
```

### Scenario 3: Code Review

**They Show You Bad Code - What Do You Say?**

Example bad code:
```javascript
// Bad code they might show
app.get('/posts', async (req, res) => {
  const posts = await prisma.posts.findMany({
    include: { Users: true, Comments: true, Likes: true }
  });
  res.json(posts);
});
```

**Your Review:**
```javascript
// Issues you should identify:
// 1. N+1 query problem - might load too much data
// 2. No pagination - will crash with many posts
// 3. No error handling
// 4. No caching
// 5. Returning all user data (security)

// Your improved version:
app.get('/posts', async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    
    const posts = await prisma.posts.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        Users: {
          select: { id: true, username: true, avatar: true }
        },
        _count: {
          select: { Comments: true, Likes: true }
        }
      },
      orderBy: { created_at: 'desc' }
    });
    
    // Could add Redis caching here
    res.json(responseSuccess(posts));
  } catch (error) {
    next(error);
  }
});
```

### Scenario 4: Debugging Performance

**Question:** "Users complain the feed is slow. How do you debug and fix it?"

**Your Answer:**
```
1. IDENTIFY THE PROBLEM:
   "First, I'd measure to confirm - don't optimize blindly"
   
   - Add timing logs:
     const start = Date.now();
     const posts = await getPosts();
     console.log(`Query took ${Date.now() - start}ms`);
   
   - Check CloudWatch/New Relic for slow endpoints
   - Look at database slow query log
   - Use `EXPLAIN` on queries

2. COMMON CULPRITS:
   
   a) N+1 Query Problem:
   // BAD: 1 query for posts + 20 queries for users = 21 queries
   const posts = await prisma.posts.findMany();
   for (const post of posts) {
     post.user = await prisma.users.findUnique({ where: { id: post.user_id }});
   }
   
   // GOOD: 2 queries total (or 1 with JOIN)
   const posts = await prisma.posts.findMany({
     include: { Users: true }
   });
   
   b) Missing Database Index:
   // Without index: Full table scan (slow!)
   // Add index on frequently queried columns
   CREATE INDEX idx_posts_user_id ON posts(user_id);
   CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
   
   c) Loading Too Much Data:
   // BAD: Load all posts ever
   const posts = await prisma.posts.findMany();
   
   // GOOD: Pagination
   const posts = await prisma.posts.findMany({ take: 20 });
   
   d) No Caching:
   // Add Redis cache for feed
   
3. FIX STRATEGY:
   - Quick win: Add Redis cache (immediate 10x speedup)
   - Medium: Add database indexes
   - Long-term: Optimize queries, add read replicas

4. MEASURE AGAIN:
   "After each change, I'd measure to verify improvement"
   - Before: 2000ms → After: 50ms ✅
```

### Scenario 5: Database Design

**Question:** "Design a database for a chat application"

**Your Answer:**
```javascript
// Start simple, then iterate

// Version 1 - MVP
table Users {
  id
  username
  avatar
}

table Messages {
  id
  sender_id  // FK to Users
  receiver_id  // FK to Users
  content
  created_at
  read
}

// Problem: Only 1-on-1 chat, no groups

// Version 2 - Add Conversations
table Conversations {
  id
  type  // 'direct' or 'group'
  name  // for groups
}

table ConversationMembers {
  conversation_id
  user_id
}

table Messages {
  id
  conversation_id
  sender_id
  content
  created_at
}

table MessageReads {
  message_id
  user_id
  read_at
}

// Indexes needed:
// - messages.conversation_id (get chat history)
// - messages.created_at (sort by time)
// - conversation_members.user_id (get user's chats)
// - message_reads compound (message_id, user_id)

// Trade-offs discussed:
// - Embedding messages in conversation doc (MongoDB):
//   + Faster reads
//   - Document size limit (16MB)
//   - Hard to query across conversations
// 
// - Separate messages table (SQL):
//   + Unlimited messages
//   + Easy to query/search
//   - Need JOIN for reads

// For scale:
// - Partition messages by conversation_id
// - Archive old messages to S3
// - Use Redis for online status
// - Use WebSocket for real-time
```

### Scenario 6: API Design

**Question:** "Design an API for following/unfollowing users"

**Your Answer:**
```javascript
// RESTful approach

POST /users/:userId/follow
DELETE /users/:userId/follow
GET /users/:userId/followers  // Who follows this user
GET /users/:userId/following  // Who this user follows
GET /users/:userId/relationship  // Check if I follow them

// Implementation:
router.post('/users/:userId/follow', protect, async (req, res) => {
  const followerId = req.user.id;
  const followingId = parseInt(req.params.userId);
  
  // Validation
  if (followerId === followingId) {
    throw new BadRequestException("Cannot follow yourself");
  }
  
  // Check if already following
  const existing = await prisma.follows.findFirst({
    where: { follower_id: followerId, following_id: followingId }
  });
  
  if (existing) {
    return res.json({ message: 'Already following' });
  }
  
  // Create follow relationship
  await prisma.follows.create({
    data: { follower_id: followerId, following_id: followingId }
  });
  
  // Optional: Create notification
  // Optional: Update follower counts in cache
  
  res.json({ message: 'Successfully followed' });
});

// What I'd consider:
// - Idempotency: Multiple follow requests = same result
// - Race conditions: Two simultaneous follows
// - Rate limiting: Prevent spam following
// - Notifications: Notify user they were followed
// - Privacy: Respect blocked users
// - Analytics: Track follow/unfollow events
```

### Scenario 7: Security

**Question:** "How do you prevent unauthorized access to posts?"

**Your Answer:**
```javascript
// Multiple layers of security

// 1. AUTHENTICATION - Who are you?
const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) throw new UnauthorizedException();
  
  const { userId } = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await prisma.users.findUnique({ where: { id: userId }});
  next();
};

// 2. AUTHORIZATION - What can you do?
const checkPostOwnership = async (req, res, next) => {
  const post = await prisma.posts.findUnique({
    where: { id: req.params.id }
  });
  
  if (post.user_id !== req.user.id) {
    throw new ForbiddenException("Not your post");
  }
  next();
};

// 3. INPUT VALIDATION
const createPost = async (req, res) => {
  // Validate input
  const schema = z.object({
    description: z.string().max(2200),
    image: z.instanceof(File)
  });
  
  const validated = schema.parse(req.body);
  // Now safe to use
};

// 4. SQL INJECTION PREVENTION
// BAD: SQL injection vulnerable
const posts = await db.query(`
  SELECT * FROM posts WHERE user_id = ${req.params.id}
`);

// GOOD: Prisma/parameterized queries
const posts = await prisma.posts.findMany({
  where: { user_id: req.params.id }
});

// 5. XSS PREVENTION
// React auto-escapes, but be careful with dangerouslySetInnerHTML
// Sanitize user input on backend
const sanitize = require('sanitize-html');
const clean = sanitize(req.body.description);

// 6. RATE LIMITING
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100  // 100 requests per 15 min
});
app.use('/api/', limiter);

// 7. CORS
app.use(cors({
  origin: ['https://myapp.com'],  // Whitelist
  credentials: true
}));

// 8. HTTPS ONLY
// Use helmet middleware
app.use(helmet());

// What I'd mention:
// - Defense in depth: Multiple layers
// - Principle of least privilege
// - Input validation is critical
// - Use established libraries (don't roll your own crypto)
// - Regular security audits
```

### Scenario 8: Async Operations

**Question:** "How do you handle sending 10,000 emails without blocking?"

**Your Answer:**
```javascript
// Problem: Synchronous = slow, blocks other requests
// Solution: Message queue (Bull + Redis)

const Queue = require('bull');
const emailQueue = new Queue('emails', {
  redis: { host: 'localhost', port: 6379 }
});

// Producer: Add jobs to queue (fast!)
app.post('/posts', protect, async (req, res) => {
  // 1. Create post (fast)
  const post = await createPost(req.body);
  
  // 2. Queue notification emails (instant!)
  const followers = await getFollowers(req.user.id);
  
  for (const follower of followers) {
    await emailQueue.add('notify-new-post', {
      userId: follower.id,
      postId: post.id
    });
  }
  
  // 3. Return immediately (don't wait for emails)
  res.json({ success: true, post });
});

// Consumer: Process jobs in background
emailQueue.process('notify-new-post', async (job) => {
  const { userId, postId } = job.data;
  
  // Send email (slow, but doesn't block API)
  await sendEmail({
    to: user.email,
    subject: 'New post from someone you follow',
    body: `Check out this post: ${postId}`
  });
});

// Benefits:
// ✅ API responds instantly
// ✅ Emails sent in background
// ✅ Automatic retry on failure
// ✅ Job prioritization
// ✅ Rate limiting (send 100 emails/sec max)
// ✅ Monitoring dashboard

// Similar patterns for:
// - Image processing
// - Video encoding
// - Report generation
// - Data exports
// - Scheduled tasks
```

### Scenario 9: Real-time Features

**Question:** "How do you implement real-time notifications?"

**Your Answer:**
```javascript
// Option 1: WebSockets (bidirectional)
const io = require('socket.io')(server);

// Client connects
io.on('connection', (socket) => {
  console.log('User connected:', socket.userId);
  
  // Join user's personal room
  socket.join(`user:${socket.userId}`);
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Server sends notification
const notifyUser = (userId, notification) => {
  io.to(`user:${userId}`).emit('notification', notification);
};

// When someone likes a post
router.post('/posts/:id/like', protect, async (req, res) => {
  const like = await likePost(req.params.id, req.user.id);
  
  // Real-time notification
  notifyUser(like.post.user_id, {
    type: 'like',
    message: `${req.user.username} liked your post`
  });
  
  res.json(like);
});

// Option 2: Server-Sent Events (one-way, simpler)
app.get('/notifications/stream', protect, (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  
  // Send notification
  const send = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };
  
  // Subscribe to Redis pub/sub
  const subscriber = redis.createClient();
  subscriber.subscribe(`notifications:${req.user.id}`);
  subscriber.on('message', (channel, message) => {
    send(JSON.parse(message));
  });
});

// Option 3: Polling (simple, but inefficient)
// Client requests every 30s
setInterval(() => {
  fetch('/api/notifications?since=' + lastCheck)
    .then(res => res.json())
    .then(notifications => {
      // Display new notifications
    });
}, 30000);

// Trade-offs:
// WebSocket: Real-time, bidirectional, complex infrastructure
// SSE: Real-time, one-way, simpler, not all browsers
// Polling: Works everywhere, simple, wasteful
```

### Scenario 10: Data Migration

**Question:** "How do you migrate 1M users from SQL to MongoDB with zero downtime?"

**Your Answer:**
```
Strategy: Dual-write then switch

Phase 1: Dual Write (write to both databases)
┌─────────┐
│ Request │
└────┬────┘
     ├──→ Write to MySQL (primary)
     └──→ Write to MongoDB (secondary)
     
All reads still from MySQL

Phase 2: Backfill Historical Data
- Script to copy existing MySQL data to MongoDB
- Run in background (don't block production)
- Verify data integrity

Phase 3: Dual Read (verify MongoDB)
- Read from both, compare results
- Log discrepancies
- Fix any sync issues

Phase 4: Switch Primary
┌─────────┐
│ Request │
└────┬────┘
     ├──→ Read from MongoDB (primary) ✅
     └──→ Still write to MySQL (backup)
     
Monitor for issues

Phase 5: Full Cutover
- Stop writing to MySQL
- Keep MySQL for rollback (1-2 weeks)
- Delete MySQL after confirming stable

Key points:
✅ No downtime
✅ Can rollback at any phase
✅ Verify data integrity continuously
✅ Monitor performance throughout
✅ Have rollback plan ready
```

---

## ⚡ Quick-Fire Technical Questions (Be Ready!)

### Node.js / Backend

**Q: What is the event loop?**
```
A: Node.js is single-threaded but non-blocking.
Event loop handles async operations:
1. Execute synchronous code
2. Check timer callbacks (setTimeout)
3. Check I/O callbacks (database, file reads)
4. Check setImmediate callbacks
5. Close callbacks
6. Repeat

Example:
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1, 4, 3, 2
// Sync first, then promises (microtasks), then timers
```

**Q: Difference between process.nextTick() and setImmediate()?**
```
A: 
- process.nextTick(): Executes BEFORE next event loop iteration
- setImmediate(): Executes in NEXT event loop iteration

process.nextTick(() => console.log('nextTick'));
setImmediate(() => console.log('setImmediate'));
// Output: nextTick, setImmediate
```

**Q: How do you handle errors in Express?**
```javascript
// Error handling middleware (must have 4 params!)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    error: err.message
  });
});

// Try-catch in async routes
app.get('/posts', async (req, res, next) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    next(error);  // Pass to error handler
  }
});

// Or use wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/posts', asyncHandler(async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
}));
```

**Q: What are middleware in Express?**
```javascript
// Functions that execute before route handler
// Have access to req, res, next

// 1. Application-level
app.use(express.json());  // Parse JSON bodies

// 2. Route-level
app.use('/api', router);

// 3. Custom middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();  // MUST call next() to continue!
};
app.use(logger);

// 4. Error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Order matters! Applied in order they're defined.
```

**Q: How do you secure API endpoints?**
```javascript
// 1. JWT Authentication
const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = jwt.verify(token, SECRET);
  req.user = decoded;
  next();
};

// 2. Rate limiting
const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });

// 3. Helmet (security headers)
app.use(helmet());

// 4. CORS
app.use(cors({ origin: 'https://myapp.com' }));

// 5. Input validation
const { body, validationResult } = require('express-validator');
app.post('/posts', [
  body('description').isLength({ max: 2200 }),
  body('email').isEmail()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});
```

### React / Frontend

**Q: What is the Virtual DOM?**
```
A: React keeps a lightweight copy of the real DOM in memory.

When state changes:
1. React updates Virtual DOM (fast)
2. Compares with previous Virtual DOM (diffing)
3. Calculates minimal changes needed (reconciliation)
4. Updates only changed parts in real DOM (efficient)

Why?
- Real DOM updates are slow
- Virtual DOM updates are fast (just JavaScript objects)
- Batch updates for efficiency
```

**Q: useState vs useRef - when to use each?**
```javascript
// useState: Triggers re-render when changed
const [count, setCount] = useState(0);
setCount(1);  // Component re-renders

// useRef: Persists across renders, NO re-render
const countRef = useRef(0);
countRef.current = 1;  // No re-render!

Use useState for:
- Data that affects UI
- Form inputs
- Toggle states

Use useRef for:
- DOM references
- Storing mutable values that don't affect render
- Previous values
- Timers/intervals

Example:
const inputRef = useRef(null);
const focusInput = () => inputRef.current.focus();
<input ref={inputRef} />
```

**Q: How do you optimize React performance?**
```javascript
// 1. React.memo (prevent unnecessary re-renders)
const PostCard = React.memo(({ post }) => {
  return <div>{post.title}</div>;
});

// 2. useMemo (expensive calculations)
const sortedPosts = useMemo(() => {
  return posts.sort((a, b) => b.likes - a.likes);
}, [posts]);

// 3. useCallback (stable function references)
const handleLike = useCallback(() => {
  likePost(postId);
}, [postId]);

// 4. Code splitting (lazy loading)
const Profile = lazy(() => import('./Profile'));
<Suspense fallback={<Loading />}>
  <Profile />
</Suspense>

// 5. Virtualization (for long lists)
import { FixedSizeList } from 'react-window';

// 6. Avoid inline functions/objects in JSX
// BAD:
<Button onClick={() => handleClick(id)} />
// GOOD:
const onClick = useCallback(() => handleClick(id), [id]);
<Button onClick={onClick} />
```

**Q: What is React Query and why use it?**
```javascript
// React Query = Data fetching library
// Handles: caching, refetching, loading states, errors

// Without React Query
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('/api/posts')
    .then(res => res.json())
    .then(setPosts)
    .catch(setError)
    .finally(() => setLoading(false));
}, []);

// With React Query
const { data: posts, isLoading, error } = useQuery({
  queryKey: ['posts'],
  queryFn: () => fetch('/api/posts').then(res => res.json())
});

Benefits:
✅ Automatic caching
✅ Background refetching
✅ Automatic retries
✅ Pagination support
✅ Optimistic updates
✅ Less boilerplate
```

### Database

**Q: What's the difference between SQL and NoSQL?**
```
SQL (MySQL, PostgreSQL):
✅ Structured data (tables, rows, columns)
✅ ACID transactions
✅ Complex queries (JOINs)
✅ Data integrity (foreign keys)
❌ Harder to scale horizontally
❌ Rigid schema

NoSQL (MongoDB, DynamoDB):
✅ Flexible schema
✅ Scales horizontally
✅ Fast reads/writes
✅ Good for unstructured data
❌ Limited JOIN support
❌ Eventual consistency (usually)

Use SQL when:
- Data is structured and relational
- Need complex queries
- ACID compliance critical (banking)

Use NoSQL when:
- Rapid iteration (schema changes)
- Massive scale needed
- Hierarchical data
- Simple queries
```

**Q: What is database indexing?**
```
Index = Data structure (B-tree) for fast lookups
Like a book's index: Jump to page instead of reading all pages

Without index:
SELECT * FROM users WHERE email = 'john@example.com'
→ Scans entire table (slow!)

With index:
CREATE INDEX idx_email ON users(email);
→ Uses B-tree lookup (fast!)

Trade-offs:
✅ Faster SELECT queries
❌ Slower INSERT/UPDATE (must update index)
❌ Uses disk space

Index:
- Primary keys (automatic)
- Foreign keys
- Columns in WHERE clauses
- Columns in ORDER BY
- Columns in JOIN conditions

Don't index:
- Columns with few unique values (gender: M/F)
- Small tables
- Columns rarely queried
```

**Q: What is a database transaction?**
```sql
-- Transaction = Group of operations that succeed or fail together
-- ACID properties: Atomicity, Consistency, Isolation, Durability

BEGIN TRANSACTION;

-- Transfer $100 from Account A to Account B
UPDATE accounts SET balance = balance - 100 WHERE id = 'A';
UPDATE accounts SET balance = balance + 100 WHERE id = 'B';

-- Both succeed:
COMMIT;

-- Or both fail:
ROLLBACK;

-- Why needed:
-- Without transaction:
-- 1. Subtract $100 from A ✅
-- 2. Server crashes! 💥
-- 3. B never gets $100 ❌
-- Result: $100 disappeared!

-- With transaction:
-- Either both happen or neither happens
```

**Q: What is N+1 query problem?**
```javascript
// N+1 Problem: 1 query + N additional queries

// BAD: 1 + 20 = 21 queries!
const posts = await prisma.posts.findMany({ take: 20 });  // 1 query
for (const post of posts) {
  post.user = await prisma.users.findUnique({  // 20 queries!
    where: { id: post.user_id }
  });
}

// GOOD: 1 or 2 queries total
const posts = await prisma.posts.findMany({
  take: 20,
  include: { Users: true }  // JOIN in single query
});

// Or in raw SQL:
SELECT posts.*, users.username, users.avatar
FROM posts
LEFT JOIN users ON posts.user_id = users.id
LIMIT 20;

// How to detect:
// - Look at database query logs
// - Count queries per request
// - Use tools like Bullet (Rails) or Prisma logging
```

### System Design

**Q: What is load balancing?**
```
Load Balancer = Distributes traffic across multiple servers

         Internet
            ↓
      Load Balancer
       /    |    \
     EC2  EC2  EC2  (3 servers)

Algorithms:
1. Round Robin: Request 1 → Server 1, Request 2 → Server 2, etc.
2. Least Connections: Send to server with fewest active connections
3. IP Hash: Same client IP → always same server (sticky sessions)

Benefits:
✅ High availability (if one server dies, others continue)
✅ Handle more traffic
✅ Zero-downtime deploys (rolling updates)

AWS: Elastic Load Balancer (ELB)
Others: Nginx, HAProxy
```

**Q: What is CAP theorem?**
```
CAP Theorem: Can only have 2 of 3:
- Consistency: All nodes see same data at same time
- Availability: Every request gets response (no downtime)
- Partition Tolerance: System works despite network failures

Examples:
MongoDB: CP (Consistent + Partition Tolerant)
- If network splits, some nodes become unavailable
- But data stays consistent

DynamoDB: AP (Available + Partition Tolerant)
- Always available
- But might serve stale data (eventual consistency)

Traditional SQL: CA (Consistent + Available)
- In theory, but can't tolerate network partitions
- Most now choose CP or AP in distributed setups

In practice: Choose based on needs
- Banking: Need consistency (CP)
- Social media: Need availability (AP)
```

**Q: Horizontal vs Vertical Scaling?**
```
Vertical Scaling (Scale UP):
- Add more power to existing server
- Bigger CPU, more RAM, faster disk
- Example: t2.micro → t2.xlarge

Pros:
✅ Simple (no code changes)
✅ No distributed system complexity

Cons:
❌ Hardware limits (can't add infinite RAM)
❌ Expensive
❌ Single point of failure

Horizontal Scaling (Scale OUT):
- Add more servers
- Example: 1 server → 10 servers

Pros:
✅ Unlimited scaling
✅ High availability
✅ Cost-effective

Cons:
❌ Code must be stateless
❌ Need load balancer
❌ Complex (distributed system)

Best practice: Start vertical, then horizontal
```

### Security

**Q: What is JWT and how does it work?**
```javascript
// JWT = JSON Web Token (authentication)
// Structure: header.payload.signature

// 1. User logs in
const token = jwt.sign(
  { userId: user.id, role: 'user' },  // Payload
  'secret-key',  // Secret
  { expiresIn: '1h' }
);

// Token looks like:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyM30.xyz789

// 2. Client stores token (localStorage or cookie)

// 3. Client sends token in requests
fetch('/api/posts', {
  headers: { 'Authorization': `Bearer ${token}` }
});

// 4. Server verifies token
const decoded = jwt.verify(token, 'secret-key');
// decoded = { userId: 123, role: 'user' }

Pros:
✅ Stateless (no session storage needed)
✅ Scales well (any server can verify)
✅ Works across domains

Cons:
❌ Can't revoke immediately (until expiry)
❌ Larger than session ID
❌ Exposed if XSS vulnerability

Security tips:
- Store in httpOnly cookie (not localStorage)
- Use HTTPS only
- Short expiry (15 min access + long refresh token)
- Rotate refresh tokens
```

**Q: What is CORS and why do we need it?**
```javascript
// CORS = Cross-Origin Resource Sharing
// Browser security: Prevent JavaScript from accessing other domains

// Scenario:
// Your frontend: https://myapp.com
// Your API: https://api.myapp.com
// Browser blocks requests by default!

// Solution: API sends CORS headers
app.use(cors({
  origin: 'https://myapp.com',  // Allow this domain
  credentials: true  // Allow cookies
}));

// Browser sees headers and allows request
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization

// Why needed?
// Without CORS: Malicious site can't steal your data
// With CORS: You control who can access your API

// Common issues:
// ❌ Allow all: cors({ origin: '*' }) // Insecure!
// ✅ Whitelist specific domains
```

**Q: SQL Injection - what is it and how to prevent?**
```javascript
// SQL Injection = Attacker injects malicious SQL

// VULNERABLE CODE:
const email = req.body.email;  // User input: ' OR '1'='1
const query = `SELECT * FROM users WHERE email = '${email}'`;
// Becomes: SELECT * FROM users WHERE email = '' OR '1'='1'
// Returns ALL users! 💀

// SAFE: Use parameterized queries
// Prisma (safe by default)
const user = await prisma.users.findUnique({
  where: { email: req.body.email }
});

// Raw SQL with parameters
const user = await db.query(
  'SELECT * FROM users WHERE email = ?',
  [req.body.email]  // Safely escaped
);

// NEVER concatenate user input into SQL!
```

### Git / DevOps

**Q: Explain Git branching strategy**
```bash
# Common strategy: Git Flow

main          # Production code (stable)
  ↓
develop       # Integration branch
  ↓
feature/xyz   # Feature branches

# Workflow:
# 1. Create feature branch
git checkout -b feature/add-comments develop

# 2. Work on feature, commit
git commit -m "Add comment model"

# 3. Push and create PR
git push origin feature/add-comments

# 4. After review, merge to develop
git checkout develop
git merge feature/add-comments

# 5. Deploy develop to staging for testing

# 6. When ready, merge develop to main
git checkout main
git merge develop

# 7. Tag release
git tag -a v1.2.0 -m "Release 1.2.0"
git push origin v1.2.0

# Hotfix for production bug:
git checkout -b hotfix/critical-bug main
# Fix, test, merge to both main AND develop
```

**Q: What is CI/CD?**
```yaml
# CI/CD = Continuous Integration / Continuous Deployment

# Continuous Integration:
# - Every commit triggers automated tests
# - Catches bugs early
# - Team integrates code frequently

# Continuous Deployment:
# - Automatically deploy to production after tests pass
# - Fast feedback
# - Small, frequent releases

# Example: GitHub Actions
name: CI/CD
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test
      
  deploy:
    needs: test  # Only if tests pass
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to AWS
        run: |
          ssh ec2-user@server 'cd app && git pull && pm2 restart all'

# Benefits:
# ✅ Catch bugs before production
# ✅ Faster releases
# ✅ Less manual work
# ✅ More confidence in deploys
```

---

## 🎤 Behavioral Interview Prep

### Show Their Values in Your Answers

1. **"Tell me about a time you shipped something fast"**
   - Talk about your capstone timeline
   - Mention iterative approach
   - "I launched with core features first, then added comments/likes"

2. **"Describe a technical decision you made"**
   - Pick one from your project (Prisma, JWT, etc.)
   - Show you considered alternatives
   - Explain trade-offs
   - "I chose X because Y, but I know it has Z limitation"

3. **"How do you handle ambiguous requirements?"**
   - "I make assumptions, document them, build MVP, then iterate"
   - "I'd rather ship something and adjust than architect for weeks"
   - Show you align with "Ship it, then improve it"

4. **"Tell me about learning something new"**
   - Perfect! You learned Node.js recently!
   - "I built this capstone having only TypeScript experience"
   - "I learned by doing - read docs, built features, debugged issues"

---

## 🚀 Quick Wins Before Interview

### 1-Day Prep (Minimum)
- [ ] Read MongoDB basics (2 hours)
- [ ] Create AWS free account, explore console (1 hour)
- [ ] Review your insta-photo code - know it cold (2 hours)
- [ ] Practice explaining your architecture out loud (1 hour)
- [ ] List 5 improvements you'd make to your project

### 3-Day Prep (Recommended)
- [ ] Complete MongoDB tutorial, build simple CRUD app (4 hours)
- [ ] Deploy your app to AWS EC2 (4 hours)
- [ ] Implement one feature from scratch, time yourself (2 hours)
- [ ] Practice system design on whiteboard (2 hours)
- [ ] Mock interview with friend (1 hour)

### 1-Week Prep (Ideal)
- [ ] All of the above
- [ ] Refactor one part of your insta-photo (improve code quality)
- [ ] Add Redis caching to your app
- [ ] Write blog post explaining your architecture
- [ ] Practice LeetCode medium problems (they may ask algorithms)

---

## 📝 Questions to Ask Them

Show you care about the work, not just getting the job:

**Technical:**
1. "What's your current tech stack and why did you choose it?"
2. "How do you balance moving fast with code quality?"
3. "What's the hardest technical challenge you're facing?"
4. "How do you handle deployments and rollbacks?"

**Culture:**
5. "How do you make decisions when requirements are unclear?"
6. "Can you give an example of 'real ownership' in practice?"
7. "How do you onboard engineers to move fast without breaking things?"

**Growth:**
8. "What would my first month look like?"
9. "How do you approach pairing junior/mid devs with complex problems?"

---

## 🎯 Day-of-Interview Checklist

### Technical Setup
- [ ] Have your insta-photo project running locally
- [ ] Be ready to screenshare and walk through code
- [ ] Have a code editor open
- [ ] Test your camera/mic/internet

### Mental Prep
- [ ] "I can learn anything" mindset
- [ ] "MongoDB is just a different database, I can learn it"
- [ ] "They value shipping over perfection"
- [ ] "They want someone who takes ownership"

### During Interview
- [ ] Think out loud (show your process)
- [ ] Ask clarifying questions
- [ ] Start simple, then add complexity
- [ ] Admit what you don't know, show how you'd learn
- [ ] Be yourself - they value "genuinely friendly"

---

## 🔑 Key Talking Points

### Your Elevator Pitch (30 seconds)
"I'm a full-stack developer who recently completed a capstone project - an Instagram clone with 15+ features. I learned Node.js from scratch for this project, but I work with TypeScript daily. I built authentication, image uploads, real-time features, and shipped the whole thing in [X weeks]. I'm comfortable with React, Node.js, and MySQL. I'm eager to learn MongoDB and AWS - I actually just created an AWS account this week to start exploring. I love the idea of moving fast and iterating, which is exactly how I built my project."

### When They Ask About MongoDB
"I haven't used MongoDB in production, but I understand the core differences from MySQL - document-based storage, flexible schemas, and different querying patterns. I've been studying it this week because I know it's part of your stack. My experience with Prisma and data modeling will transfer well. I'm a fast learner - I picked up Node.js from zero in a few weeks for my capstone."

### When They Ask About AWS
"I have basic familiarity with AWS concepts - I know EC2, S3, RDS, Lambda - but I haven't managed production AWS infrastructure. That said, I understand the principles: scaling, security, managed services. I'm currently deploying my project to EC2 to get hands-on experience. I learn best by doing, and I'm excited to work with AWS in a real production environment."

---

## 🎓 Final Tips

### What Makes You Stand Out

1. **You Learn Fast**: Learned Node.js recently and built a real project
2. **You Ship**: Built a complete full-stack app, not just tutorials
3. **You Think Product**: Built features users actually use
4. **You Write Clean Code**: Good separation of concerns, error handling
5. **You Use TypeScript**: Shows you care about type safety
6. **You're Honest**: Admit gaps, show how you'll fill them

### Red Flags to Avoid

❌ "I need perfect requirements before I start"
❌ "I spent 3 weeks architecting before writing code"
❌ "I can't learn MongoDB, I only know MySQL"
❌ "I need my manager to review every decision"
❌ "I prefer working 9-5 with clear boundaries"

### Green Flags to Show

✅ "I made this decision because..."
✅ "I'd start simple, then iterate"
✅ "I don't know X, but here's how I'd learn it"
✅ "I shipped this in X days by cutting scope smartly"
✅ "I pushed back on this feature because..."

---

## 📚 Resources for Quick Learning

### MongoDB (PRIORITY)
- MongoDB University M001 (free): https://university.mongodb.com/
- Docs: https://www.mongodb.com/docs/manual/tutorial/
- Try it: https://mongoplayground.net/

### AWS (PRIORITY)
- AWS Free Tier: https://aws.amazon.com/free/
- Tutorial: Deploy Node.js to EC2
- Learn: S3, RDS, CloudWatch basics

### Redis (PRIORITY)
- Try Redis: https://try.redis.io/
- Docs: https://redis.io/docs/
- Quick start: `brew install redis` (Mac) or `apt install redis` (Ubuntu)

### System Design
- System Design Primer: https://github.com/donnemartin/system-design-primer
- Practice: Draw your insta-photo architecture
- Think: How would you scale it?

### Practice
- CodeSignal (they might use this)
- LeetCode Easy/Medium problems
- Mock interview: Pramp.com

---

## 🧪 Hands-On Practice: Add Redis to Your Project

**Try this before your interview (30 minutes):**

```bash
# 1. Install Redis
# Mac:
brew install redis
brew services start redis

# Ubuntu (your dev container):
sudo apt update
sudo apt install redis-server -y
sudo systemctl start redis

# Verify it's running:
redis-cli ping
# Should return: PONG

# 2. Install Redis client in your backend
cd backend
npm install redis
```

```javascript
// 3. Add Redis to your project
// backend/src/common/redis/init.redis.js
import { createClient } from 'redis';

const client = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

client.on('error', (err) => console.error('Redis error:', err));
client.on('connect', () => console.log('✅ Redis connected'));

await client.connect();

export default client;
```

```javascript
// 4. Modify your post service to use caching
// backend/src/services/post.service.js
import redis from '../common/redis/init.redis.js';

export const postService = {
  findAll: async (req) => {
    let { page, limit } = req.query;
    page = page ? parseInt(page) : 1;
    limit = limit ? parseInt(limit) : 10;
    
    // Try cache first
    const cacheKey = `posts:feed:page:${page}:limit:${limit}`;
    const cached = await redis.get(cacheKey);
    
    if (cached) {
      console.log('✅ Cache HIT');
      return JSON.parse(cached);
    }
    
    console.log('❌ Cache MISS - fetching from DB');
    
    // Get from database
    const posts = await prisma.posts.findMany({
      skip: (page - 1) * limit,
      take: limit,
      include: {
        Users: {
          select: { id: true, username: true, avatar: true }
        },
        _count: {
          select: { Comments: true, Likes: true }
        }
      },
      orderBy: { created_at: 'desc' }
    });
    
    // Store in cache for 5 minutes
    await redis.setEx(cacheKey, 300, JSON.stringify(posts));
    
    return posts;
  },
  
  // Invalidate cache when creating post
  create: async (req) => {
    const post = await prisma.posts.create({ /* ... */ });
    
    // Clear feed cache so new post appears
    const keys = await redis.keys('posts:feed:*');
    if (keys.length > 0) {
      await redis.del(keys);
    }
    
    return post;
  }
};
```

```javascript
// 5. Test it!
// First request (slow - from database):
// GET /api/posts → 150ms

// Second request (fast - from cache):
// GET /api/posts → 5ms  🚀

// Create new post:
// POST /api/posts → Cache invalidated

// Next request (slow again - cache was cleared):
// GET /api/posts → 150ms
```

**What to say in interview:**
```
"I added Redis caching to my insta-photo project this week.
I cached the homepage feed which reduced response time from 150ms to 5ms - 
that's a 30x improvement! I invalidate the cache when new posts are created.

In production, I'd also use Redis for:
- Session storage (replace JWT or supplement it)
- Rate limiting (count requests per user)
- Real-time features (pub/sub for notifications)
- Trending posts (sorted sets by like count)"
```

---

## 💪 Confidence Builders

You have MORE than you think:

1. ✅ You built a real, working product
2. ✅ You know React + TypeScript (required)
3. ✅ You know Node.js (required)
4. ✅ You understand REST APIs
5. ✅ You can learn fast (proved it with Node.js)
6. ✅ Your code is clean and organized
7. ✅ You understand auth, security, file uploads
8. ✅ You think about user experience

You need to learn:
1. ⚠️ MongoDB (doable in a few days)
2. ⚠️ AWS basics (doable in a week)
3. ⚠️ System design (practice thinking at scale)

**MongoDB and AWS are learnable. Your ability to ship and learn fast is NOT.**

---

## 🎯 One-Page Cheat Sheet for Day-of

```
REMEMBER:
- Think out loud
- Start simple, then scale
- Admit gaps, show learning approach
- Focus on product value
- Show you can ship fast
- Ask clarifying questions

YOUR WINS:
- Built full-stack Instagram clone
- Learned Node.js from scratch
- Clean architecture: controller/service/data
- JWT auth + file uploads + relations
- TypeScript for type safety
- Shipped complete product

YOUR GAPS (be honest):
- MongoDB (learning now, understand concepts)
- AWS (exploring, understand architecture)
- Production scale (eager to learn)

THEIR VALUES:
- Simple > Complicated
- Ship > Perfect
- Product > Engineering
- Ownership > Approval
- Fast > Process

QUESTIONS FOR THEM:
1. What's the hardest tech challenge?
2. How do you balance speed vs quality?
3. What does ownership look like here?
4. What would my first month look like?
```

---

## 🚀 You Got This!

Remember: They're looking for someone who can learn, ship fast, and take ownership. You've already proven you can do all three with your capstone project.

They don't expect you to know everything. They expect you to:
1. Learn quickly
2. Ship working code
3. Make good decisions
4. Be honest about gaps
5. Care about the product

You have all of these qualities. Go show them! 💪

Good luck! 🍀

---

*P.S. Don't forget to tell them your favorite ice cream flavor. And please, not "Vanilla JS" 😂*
