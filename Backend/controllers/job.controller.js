import {Job} from "../models/job.model.js"
export const postJob = async (req, res) => {
  try {
    const {title, description, requirements, salary, location, jobType, experience, position, companyId,} = req.body;
    const userId = req.id;
    if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
      return res.status(400).json({
        message : "Something is missing",
        success : false
      });
    };
    const job = await Job.create({title, description, requirements : requirements.split(","), salary : Number(salary), location, jobType, experienceLevel : experience, position, company : companyId, created_by : userId});
    return res.status(201).json({
      message : "New job created successfully",
      success : true,
      job,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
      success: false,
    });
  }
};
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keywords || "";
    const query = {
      $or : [
        { title : { $regex : keyword, $options : "i" } },
        { description : { $regex : keyword, $options : "i" } }
      ]
    };
    const jobs = await Job.find(query)
      .populate({
        path : "company"
      })
      .sort({ createdAt : -1 });
    if (!jobs) {
      return res.status(404).json({
        message : "Jobs not found",
        success : false
      });
    };
    return res.status(200).json({
      jobs,
      success : true
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error : error.message,
      success : false
    });
  };
};
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path : "applications"
    });
    if (!job) {
      return res.status(404).json({
        message : "Jobs not found",
        success : false
      });
    };
    return res.status(200).json({
      job,
      success : true
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error : error.message,
      success : false
    });
  }
};
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by : adminId }).populate({
      path : 'company'
    });
    if (!jobs) {
      return res.status(404).json({
        message : "Jobs not found",
        success : false
      });
    };
    return res.status(200).json({
      jobs,
      success : true
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error : error.message,
      success : false,
    });
  }
};