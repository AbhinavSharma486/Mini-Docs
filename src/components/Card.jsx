import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

function Card({ data, reference }) {
    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.2 }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            className="relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
            <FaRegFileAlt />
            <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
            <div className="footer absolute bottom-0  w-full left-0">
                <div className="flex items-center justify-between px-8 py-3 mb-3">
                    <h5>{data.filesize}</h5>
                    <span className="w-7 h-7 bg-zinc-600 flex rounded-full items-center justify-center">
                        {data.close ? (
                            <IoClose size="0.7em" />
                        ) : (
                            <LuDownload size="0.7em" color="#ffffff" />
                        )}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div
                        className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
                            } flex items-center justify-center`}>
                        <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

Card.propTypes = {
    data: PropTypes.shape({
        desc: PropTypes.string.isRequired,
        filesize: PropTypes.string.isRequired,
        close: PropTypes.bool.isRequired,
        tag: PropTypes.shape({
            isOpen: PropTypes.bool.isRequired,
            tagTitle: PropTypes.string.isRequired,
            tagColor: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    reference: PropTypes.object.isRequired,
};

export default Card;
