import PostItem from '@/components/post-item';
import SectionTitle from '@/components/section-title';
import { buttonVariants } from '@/components/ui/button';
import { getPosts } from '@/lib/post'
import { ChevronsLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const PostsSection = async() => {
    const {posts} = await getPosts();
    // console.log(posts);
  return (
    <section className="space-y-6 md:space-y-8">
      <div className="flex items-center justify-between gap-8">
        <SectionTitle title="أحدث المقالات" />
        <Link href="/posts" className={buttonVariants({ variant: "link" })}>
          <span>مشاهدة المزيد</span>
          <ChevronsLeft className="size-4" />
        </Link>
      </div>
      {/* posts cards */}
      <div className="grid gap-4 md:gap-8">
        {posts.slice(0, 4).map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default PostsSection
