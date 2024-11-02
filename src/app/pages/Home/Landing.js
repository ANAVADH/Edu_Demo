'use client'
import React from 'react'


function Landing() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/68be/5f5a/09a823d553d064e2762b9792e00acbab?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vc7HXByqTx2OOYdVtAWgxFnkaq3prDQVOZGV57ZKXPs8Ohe4wuFpfY0qU3oKJf2nG70EjbBwfYzErDtdaHgP5UfxQAch1Nm2RCHN6NMKzzqHxVjLYGXT1GhlQUFdcizCB0BKgVac8M04XlwF0Fj21Wmb7f1vp7NMnxXnMKdUhbHNDExNbFEI82NOEsm7L19dccg4K~RZGe3g-x6VG6ZsyHLmp1Q92ZDnfSJWtpQu~0uEistjUqhlM-Qbr9wiU6~ZU2DE4LpZsp33vfWtqYqZosKVVc~WLgQ376AX5-3YIkOC00zA9MBLm0gRJoZb~VEuJfcDfcfw4vm-mHyauXGZxw__)`,
      }}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="flex-grow"></div>
        <div className="flex flex-col gap-5 items-start justify-start mb-20 ml-16">
          <h1 className="text-5xl text-white font-bold">Lorem ipsum dolor sit amet</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.<br />
            Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius<br />
            ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse<br />
            platea dictumst.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Landing