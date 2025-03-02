//@Desc Get All bootcamps
//@route GET/api/v1/bootcamps
//@access public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps" });

}
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show bootcamp" });

}
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Create new bootcamp" });

}
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Display bootcamp ${req.params}` });

}
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params}` });

}