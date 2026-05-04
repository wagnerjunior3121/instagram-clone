function PostSkeleton() {
  return (
    <div className='postSingle postSkeleton'>
      <div className='skeletonImg'></div>
      <div className='skeletonLines'>
        <div className='skeletonLine skeletonLine--short'></div>
        <div className='skeletonLine skeletonLine--full'></div>
        <div className='skeletonLine skeletonLine--medium'></div>
      </div>
    </div>
  );
}

export default PostSkeleton;
