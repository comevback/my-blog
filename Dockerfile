# 构建阶段
FROM node:20 AS build

# 设置工作目录
WORKDIR /app

# 将package.json和package-lock.json复制到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 将整个应用程序代码复制到工作目录
COPY . .

# 构建Next.js应用
RUN npm run build

# 生产阶段
FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 从构建阶段复制依赖
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/package*.json ./

# 将public文件夹复制到工作目录
COPY --from=build /app/public ./public

# 暴露端口
EXPOSE 3000

# 启动Next.js服务器
CMD ["npm", "start"]
