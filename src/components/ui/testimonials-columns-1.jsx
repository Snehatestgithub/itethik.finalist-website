import React, { Fragment } from 'react';
import { motion } from "motion/react";
import { Star, UserCircle2, CheckCircle2, Quote } from "lucide-react";

export const TestimonialsColumn = ({ testimonials = [], className = '', duration = 15, onOpenImage }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className={`flex-1 min-w-0 w-full ${className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          willChange: "transform",
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <Fragment key={index}>
              {testimonials.map(({ text, image, name, role, rating = 5, photos = [], source }, i) => {
                const hasProfilePhoto = Boolean(image);
                const shouldShowPhotos = photos.length > 0;

                return (
                  <div
                    className="relative w-full rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-7 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:-translate-y-1 group"
                    key={`${index}-${i}`}
                  >
                    {/* Subtle top corner gradient glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                    {/* Header: Stars & Quote Icon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={15}
                            className={starIndex < (rating || 5) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}
                          />
                        ))}
                      </div>
                      <Quote size={18} className="text-cyan-400/40 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    {/* Testimonial Quote Text */}
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed tracking-normal font-normal">
                      "{text}"
                    </p>

                    {/* Photo Attachments if present */}
                    {shouldShowPhotos ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {photos.slice(0, 3).map((photo, photoIndex) => (
                          <button
                            key={photoIndex}
                            type="button"
                            onClick={() => onOpenImage?.(photo)}
                            className="overflow-hidden rounded-xl border border-cyan-400/20 hover:border-cyan-400 transition transform hover:scale-105"
                          >
                            <img
                              src={photo.startsWith('http') ? photo : `${window.location.origin}${photo}`}
                              alt={`${name} review attachment ${photoIndex + 1}`}
                              className="h-16 w-16 object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    ) : null}

                    {/* Author Information */}
                    <div className="flex items-center gap-3.5 mt-5 pt-4 border-t border-white/10">
                      {hasProfilePhoto ? (
                        <img
                          width={44}
                          height={44}
                          src={image}
                          alt={name}
                          className="h-11 w-11 rounded-full object-cover border-2 border-cyan-400/40 shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div
                          aria-label="default-user-avatar"
                          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cyan-400/30 bg-cyan-500/10 text-cyan-300 font-bold text-sm"
                        >
                          {name ? name.charAt(0).toUpperCase() : <UserCircle2 size={22} />}
                        </div>
                      )}
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1.5 font-bold text-white tracking-tight leading-5 text-sm sm:text-base truncate">
                          <span>{name}</span>
                          <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                        </div>
                        <div className="leading-5 text-xs sm:text-sm text-cyan-400/90 tracking-normal truncate">
                          {role || (source === 'google' ? 'Google Verified Review' : 'Verified Customer')}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

